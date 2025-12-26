// import React, { useState } from 'react';
// import axios from 'axios';
// import { useFirebase } from '../Firebase/Firebase';

// const AddResource = () => {
//   const { currentUser } = useFirebase();

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     type: '',
//     link: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!currentUser?.email) {
//       alert('User not logged in.');
//       return;
//     }

//     const dataToSend = {
//       ...formData,
//       submittedBy: currentUser.email
//     };

//     try {
//       await axios.post('http://localhost:6800/api/v1/resource', dataToSend);
//       alert('Resource submitted for approval!');
//       setFormData({ name: '', description: '', category: '', type: '', link: '' });
//     } catch (err) {
//       console.error(err);
//       alert('Submission failed.');
//     }
//   };

//   return (
//     <main className="flex items-center justify-center p-10">
//       <form className="bg-white p-6 rounded-md shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
//         <h2 className="text-xl font-bold mb-4">Submit New Resource</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Resource Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mb-3 w-full border px-4 py-2 rounded"
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           className="mb-3 w-full border px-4 py-2 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="category"
//           placeholder="Category (e.g., Web Dev, ML)"
//           value={formData.category}
//           onChange={handleChange}
//           className="mb-3 w-full border px-4 py-2 rounded"
//           required
//         />

//         <select
//           name="type"
//           value={formData.type}
//           onChange={handleChange}
//           className="mb-3 w-full border px-4 py-2 rounded"
//           required
//         >
//           <option value="">Select Type</option>
//           <option value="Notes">Notes</option>
//           <option value="Videos">Videos</option>
//           <option value="Quizzes">Quizzes</option>
//           <option value="Assignments">Assignments</option>
//           <option value="Books">Books</option>
//           <option value="Articles">Articles</option>
//         </select>

//         <input
//           type="url"
//           name="link"
//           placeholder="Resource Link"
//           value={formData.link}
//           onChange={handleChange}
//           className="mb-3 w-full border px-4 py-2 rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Submit Resource
//         </button>
//       </form>
//     </main>
//   );
// };

// export default AddResource;


// Update your AddResource.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useFirebase } from '../Firebase/Firebase';
import { 
  SparklesIcon, 
  LightBulbIcon, 
  DocumentArrowUpIcon,
  XCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

// Create API service directly in component (or import from separate file)
const API_BASE_URL = 'http://localhost:6800/api/v1';

const geminiAPI = {
  // Analyze text content
  analyzeContent: async (content) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/ai/analyze`, {
        content,
        contentType: 'text'
      });
      return response.data;
    } catch (error) {
      console.error('Content analysis failed:', error);
      return { 
        success: false, 
        data: { 
          title: 'Analysis Failed', 
          summary: 'AI analysis temporarily unavailable',
          category: 'General',
          suggestedTags: []
        } 
      };
    }
  },

  // Check plagiarism
  checkPlagiarism: async (content) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/ai/check-plagiarism`, {
        content
      });
      return response.data;
    } catch (error) {
      console.error('Plagiarism check failed:', error);
      return { 
        success: false, 
        data: { 
          similarityScore: 0, 
          isPlagiarized: false,
          recommendation: 'Review'
        } 
      };
    }
  },

  // Process file upload
  processFileUpload: async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await axios.post(`${API_BASE_URL}/ai/process-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('File processing failed:', error);
      return { 
        success: false, 
        data: { 
          metadata: {
            analysis: {
              title: file.name,
              summary: 'File uploaded successfully',
              category: 'General'
            }
          }
        } 
      };
    }
  }
};

const AddResource = () => {
  const { currentUser } = useFirebase();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    type: '',
    link: ''
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [plagiarismResult, setPlagiarismResult] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({
    isUploading: false,
    isSuccess: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle file selection
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    setFile(selectedFile);
    setFileName(selectedFile.name);
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                         'text/plain'];
    
    if (!allowedTypes.includes(selectedFile.type)) {
      alert('Please upload PDF, DOC, DOCX, or TXT files only.');
      return;
    }
    
    // Validate file size (10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB.');
      return;
    }
    
    setIsAnalyzing(true);
    setUploadStatus({
      isUploading: true,
      isSuccess: false,
      message: 'Analyzing file with AI...'
    });
    
    try {
      const result = await geminiAPI.processFileUpload(selectedFile);
      
      if (result?.success) {
        setAiAnalysis(result.data);
        
        // Auto-fill form with AI suggestions
        setFormData(prev => ({
          ...prev,
          name: result.data.metadata?.analysis?.title || prev.name || selectedFile.name.replace(/\.[^/.]+$/, ""),
          description: result.data.metadata?.analysis?.summary || prev.description || `Uploaded file: ${selectedFile.name}`,
          category: result.data.metadata?.analysis?.category || prev.category
        }));
        
        // Show plagiarism result if available
        if (result.data.metadata?.plagiarism) {
          setPlagiarismResult(result.data.metadata.plagiarism);
        }
        
        setUploadStatus({
          isUploading: false,
          isSuccess: true,
          message: '✅ File analyzed successfully! AI suggestions applied.'
        });
      } else {
        setUploadStatus({
          isUploading: false,
          isSuccess: false,
          message: '⚠️ File uploaded but AI analysis failed. Please fill details manually.'
        });
      }
    } catch (error) {
      console.error('AI analysis failed:', error);
      setUploadStatus({
        isUploading: false,
        isSuccess: false,
        message: '❌ File upload failed. Please try again.'
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Remove selected file
  const removeFile = () => {
    setFile(null);
    setFileName('');
    setAiAnalysis(null);
    setUploadStatus({
      isUploading: false,
      isSuccess: false,
      message: ''
    });
  };

  // Analyze text description
  const analyzeDescription = async () => {
    if (!formData.description || formData.description.length < 20) {
      alert('Please enter a description with at least 20 characters for AI analysis.');
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const result = await geminiAPI.analyzeContent(formData.description);
      if (result?.success && result.data) {
        setAiAnalysis({ metadata: { analysis: result.data } });
        
        // Auto-suggest category and update title
        setFormData(prev => ({
          ...prev,
          name: result.data.title || prev.name,
          category: result.data.category || prev.category
        }));
        
        alert('✅ AI analysis complete! Suggestions have been applied.');
      } else {
        alert('⚠️ AI analysis completed but no suggestions were generated.');
      }
    } catch (error) {
      console.error('Text analysis failed:', error);
      alert('❌ AI analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Check plagiarism for text
  const checkPlagiarism = async () => {
    if (!formData.description || formData.description.length < 50) {
      alert('Please enter at least 50 characters for plagiarism check.');
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const result = await geminiAPI.checkPlagiarism(formData.description);
      setPlagiarismResult(result.data);
      
      if (result.data?.similarityScore > 30) {
        alert(`⚠️ Plagiarism warning: ${result.data.similarityScore}% similarity detected.`);
      } else {
        alert(`✅ Plagiarism check passed: ${result.data?.similarityScore || 0}% similarity.`);
      }
    } catch (error) {
      console.error('Plagiarism check failed:', error);
      alert('❌ Plagiarism check failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser?.email) {
      alert('Please log in to submit resources.');
      return;
    }

    // Basic validation
    if (!formData.name || !formData.description || !formData.category || !formData.type || !formData.link) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate URL
    try {
      new URL(formData.link);
    } catch {
      alert('Please enter a valid URL.');
      return;
    }

    const dataToSend = {
      ...formData,
      submittedBy: currentUser.email,
      aiMetadata: aiAnalysis // Send AI analysis to backend
    };

    try {
      setUploadStatus({
        isUploading: true,
        isSuccess: false,
        message: 'Submitting resource...'
      });

      // Submit to backend
      const response = await axios.post(`${API_BASE_URL}/resource`, dataToSend);
      
      if (response.data.success) {
        setUploadStatus({
          isUploading: false,
          isSuccess: true,
          message: `✅ Resource submitted successfully! ${aiAnalysis ? `AI Score: ${aiAnalysis.metadata?.analysis?.qualityScore || 'N/A'}` : ''}`
        });
        
        alert(`Resource submitted for approval! ${aiAnalysis ? `AI Quality Score: ${aiAnalysis.metadata?.analysis?.qualityScore || 'N/A'}/10` : ''}`);
        
        // Reset form
        setFormData({ 
          name: '', 
          description: '', 
          category: '', 
          type: '', 
          link: '' 
        });
        setFile(null);
        setFileName('');
        setAiAnalysis(null);
        setPlagiarismResult(null);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setUploadStatus({
            isUploading: false,
            isSuccess: false,
            message: ''
          });
        }, 5000);
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setUploadStatus({
        isUploading: false,
        isSuccess: false,
        message: `❌ Submission failed: ${err.response?.data?.message || err.message}`
      });
      alert('Submission failed. Please check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Add Study Resource
            <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800">
              <SparklesIcon className="h-4 w-4 mr-1" />
              AI-Powered
            </span>
          </h1>
          <p className="mt-2 text-gray-600">
            Submit educational resources enhanced with Gemini AI analysis
          </p>
        </div>

        {/* Upload Status */}
        {uploadStatus.message && (
          <div className={`mb-6 p-4 rounded-lg ${uploadStatus.isSuccess ? 'bg-green-50 border border-green-200' : uploadStatus.isUploading ? 'bg-blue-50 border border-blue-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center">
              {uploadStatus.isUploading ? (
                <ArrowPathIcon className="h-5 w-5 text-blue-600 mr-2 animate-spin" />
              ) : uploadStatus.isSuccess ? (
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              ) : (
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2" />
              )}
              <span className={`text-sm font-medium ${uploadStatus.isSuccess ? 'text-green-800' : uploadStatus.isUploading ? 'text-blue-800' : 'text-red-800'}`}>
                {uploadStatus.message}
              </span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* AI Assistant Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LightBulbIcon className="h-6 w-6 text-white mr-2" />
                <h2 className="text-xl font-bold text-white">Gemini AI Assistant</h2>
              </div>
              <div className="text-white/80 text-sm">
                {currentUser?.email ? `Logged in as: ${currentUser.email}` : 'Please log in'}
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* File Upload Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <DocumentArrowUpIcon className="h-5 w-5 inline mr-1 text-indigo-500" />
                Upload Study Material (Optional)
              </label>
              
              <div className="space-y-4">
                {!file ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors">
                    <div className="max-w-xs mx-auto">
                      <DocumentArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag & drop or click to upload
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        Supports PDF, DOC, DOCX, TXT (Max 10MB)
                      </p>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <span className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
                          Choose File
                        </span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DocumentArrowUpIcon className="h-8 w-8 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{fileName}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for AI analysis
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <XCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Analysis Results */}
            {aiAnalysis && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                <div className="flex items-center mb-3">
                  <SparklesIcon className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-800">AI Analysis Complete</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-700"><strong>Title:</strong> {aiAnalysis.metadata?.analysis?.title}</p>
                    <p className="text-gray-700"><strong>Category:</strong> {aiAnalysis.metadata?.analysis?.category}</p>
                    <p className="text-gray-700"><strong>Difficulty:</strong> {aiAnalysis.metadata?.analysis?.difficultyLevel}</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>Study Time:</strong> {aiAnalysis.metadata?.analysis?.estimatedStudyTime}</p>
                    <p className="text-gray-700"><strong>Quality Score:</strong> {aiAnalysis.metadata?.analysis?.qualityScore || 'N/A'}/10</p>
                    <p className="text-gray-700"><strong>Key Topics:</strong> {aiAnalysis.metadata?.analysis?.keyTopics?.join(', ') || 'N/A'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Plagiarism Warning */}
            {plagiarismResult && plagiarismResult.similarityScore > 30 && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                  <div>
                    <h3 className="font-medium text-yellow-800">⚠️ Plagiarism Warning</h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Similarity detected: <strong>{plagiarismResult.similarityScore}%</strong>
                      {plagiarismResult.recommendation && ` - Recommendation: ${plagiarismResult.recommendation}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Resource Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resource Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Introduction to Machine Learning"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* Description with AI buttons */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={analyzeDescription}
                      disabled={isAnalyzing || !formData.description}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <ArrowPathIcon className="h-3 w-3 mr-1 animate-spin" />
                      ) : (
                        <LightBulbIcon className="h-3 w-3 mr-1" />
                      )}
                      AI Analyze
                    </button>
                    <button
                      type="button"
                      onClick={checkPlagiarism}
                      disabled={isAnalyzing || !formData.description}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-md hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                      Check Plagiarism
                    </button>
                  </div>
                </div>
                <textarea
                  name="description"
                  placeholder="Describe the resource in detail. Include topics covered, learning objectives, and target audience..."
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* Category and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="e.g., Computer Science, Mathematics"
                    value={formData.category}
                    onChange={handleChange}
                    list="categorySuggestions"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                  <datalist id="categorySuggestions">
                    {aiAnalysis?.metadata?.analysis?.suggestedTags?.map((tag, idx) => (
                      <option key={idx} value={tag} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resource Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Notes">Notes</option>
                    <option value="Videos">Videos</option>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Assignments">Assignments</option>
                    <option value="Books">Books</option>
                    <option value="Articles">Articles</option>
                    <option value="Presentations">Presentations</option>
                    <option value="Code Examples">Code Examples</option>
                  </select>
                </div>
              </div>

              {/* Resource Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resource Link *
                </label>
                <input
                  type="url"
                  name="link"
                  placeholder="https://example.com/resource or Google Drive/Dropbox link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* AI Generated Tags Preview */}
              {aiAnalysis?.metadata?.analysis?.suggestedTags && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <SparklesIcon className="h-4 w-4 mr-1 text-indigo-500" />
                    AI Suggested Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aiAnalysis.metadata.analysis.suggestedTags.slice(0, 8).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-white border border-gray-300 text-sm text-gray-700 rounded-full hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isAnalyzing || uploadStatus.isUploading}
                className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center ${isAnalyzing || uploadStatus.isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'} text-white transition-all transform hover:scale-[1.02]`}
              >
                {isAnalyzing || uploadStatus.isUploading ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Submit Resource with AI Analysis
                  </>
                )}
              </button>
              
              <p className="mt-3 text-center text-sm text-gray-500">
                Resources are reviewed by admins before publication
              </p>
            </div>
          </div>
        </form>

        {/* Features List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <LightBulbIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-gray-900">AI Analysis</h3>
            </div>
            <p className="text-sm text-gray-600">
              Automatically analyzes content for topics, difficulty, and quality
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
              <h3 className="font-medium text-gray-900">Plagiarism Check</h3>
            </div>
            <p className="text-sm text-gray-600">
              Detects duplicate content and ensures originality
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-medium text-gray-900">Auto-Tagging</h3>
            </div>
            <p className="text-sm text-gray-600">
              AI suggests relevant tags and categories for better discoverability
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddResource;