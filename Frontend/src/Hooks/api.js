// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:6800/api/v1';

// Study Materials API
export const fetchStudyMaterials = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/fetch`);
        return response.data;
    } catch (error) {
        console.error('Error fetching study materials:', error);
        throw error;
    }
};

// Gemini AI API Functions
export const geminiAPI = {
    // 1. Enhanced Search
    enhanceSearch: async (query) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/ai/enhance-search`, {
                params: { query }
            });
            return response.data;
        } catch (error) {
            console.error('Search enhancement failed:', error);
            return { enhancedQuery: query, keywords: [], filters: {} };
        }
    },

    // 2. Analyze Content (for uploads)
    analyzeContent: async (content, contentType = 'text') => {
        try {
            const response = await axios.post(`${API_BASE_URL}/ai/analyze`, {
                content,
                contentType
            });
            return response.data;
        } catch (error) {
            console.error('Content analysis failed:', error);
            return null;
        }
    },

    // 3. Check Plagiarism
    checkPlagiarism: async (content) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/ai/check-plagiarism`, {
                content
            });
            return response.data;
        } catch (error) {
            console.error('Plagiarism check failed:', error);
            return { similarityScore: 0, isPlagiarized: false };
        }
    },

    // 4. Get Recommendations
    getRecommendations: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/ai/recommendations/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Recommendations failed:', error);
            return { recommendations: [] };
        }
    },

    // 5. Process File Upload (PDF, DOC, etc.)
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
            return null;
        }
    }
};

// Submit Resource with AI Analysis
export const submitResourceWithAI = async (resourceData, file = null) => {
    try {
        let aiAnalysis = null;
        
        // If file is provided, process with AI
        if (file) {
            const fileResult = await geminiAPI.processFileUpload(file);
            if (fileResult?.success) {
                aiAnalysis = fileResult.data;
                // Auto-fill form fields from AI analysis
                resourceData = {
                    ...resourceData,
                    name: resourceData.name || aiAnalysis.metadata.analysis.title,
                    description: resourceData.description || aiAnalysis.metadata.analysis.summary,
                    category: resourceData.category || aiAnalysis.metadata.analysis.category,
                    tags: aiAnalysis.metadata.analysis.suggestedTags.join(', ')
                };
            }
        }
        
        // If no file but has description, analyze text
        else if (resourceData.description) {
            const textAnalysis = await geminiAPI.analyzeContent(resourceData.description);
            if (textAnalysis?.data) {
                resourceData = {
                    ...resourceData,
                    category: resourceData.category || textAnalysis.data.category,
                    tags: textAnalysis.data.suggestedTags?.join(', ') || ''
                };
            }
        }
        
        // Submit to backend
        const response = await axios.post(`${API_BASE_URL}/resource`, resourceData);
        
        return {
            ...response.data,
            aiAnalysis
        };
        
    } catch (error) {
        console.error('Submission failed:', error);
        throw error;
    }
};