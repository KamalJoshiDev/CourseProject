import React, { useState } from 'react';
import axios from 'axios';
import { useFirebase } from '../Firebase/Firebase';

const AddResource = () => {
  const { currentUser } = useFirebase();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    type: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser?.email) {
      alert('User not logged in.');
      return;
    }

    const dataToSend = {
      ...formData,
      submittedBy: currentUser.email
    };

    try {
      await axios.post('http://localhost:6800/api/v1/resource', dataToSend);
      alert('Resource submitted for approval!');
      setFormData({ name: '', description: '', category: '', type: '', link: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed.');
    }
  };

  return (
    <main className="flex items-center justify-center p-10">
      <form className="bg-white p-6 rounded-md shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Submit New Resource</h2>

        <input
          type="text"
          name="name"
          placeholder="Resource Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3 w-full border px-4 py-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="mb-3 w-full border px-4 py-2 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Web Dev, ML)"
          value={formData.category}
          onChange={handleChange}
          className="mb-3 w-full border px-4 py-2 rounded"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mb-3 w-full border px-4 py-2 rounded"
          required
        >
          <option value="">Select Type</option>
          <option value="Notes">Notes</option>
          <option value="Videos">Videos</option>
          <option value="Quizzes">Quizzes</option>
          <option value="Assignments">Assignments</option>
          <option value="Books">Books</option>
          <option value="Articles">Articles</option>
        </select>

        <input
          type="url"
          name="link"
          placeholder="Resource Link"
          value={formData.link}
          onChange={handleChange}
          className="mb-3 w-full border px-4 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Resource
        </button>
      </form>
    </main>
  );
};

export default AddResource;
