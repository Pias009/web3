
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDescription, setNewsDescription] = useState('');
  const [newsTags, setNewsTags] = useState('');
  const [newsImage, setNewsImage] = useState<File | null>(null);
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;

    const formData = new FormData();
    formData.append('title', newsTitle);
    formData.append('description', newsDescription);
    formData.append('tags', newsTags);
    if (newsImage) {
      formData.append('image', newsImage);
    }

    try {
      await axios.post('http://localhost:5000/api/news', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('News uploaded successfully!');
      setNewsTitle('');
      setNewsDescription('');
      setNewsTags('');
      setNewsImage(null);
    } catch (err) {
      setMessage('Error uploading news.');
      console.error(err);
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;

    const formData = new FormData();
    if (projectImage) {
      formData.append('image', projectImage);
    }

    try {
      await axios.post('http://localhost:5000/api/projects', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Project uploaded successfully!');
      setProjectImage(null);
    } catch (err) {
      setMessage('Error uploading project.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* News Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload News</h2>
          <form onSubmit={handleNewsSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={4}
                value={newsDescription}
                onChange={(e) => setNewsDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={newsTags}
                onChange={(e) => setNewsTags(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                className="mt-1 block w-full text-gray-700"
                accept="image/*"
                onChange={(e) => setNewsImage(e.target.files ? e.target.files[0] : null)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload News
            </button>
          </form>
        </div>

        {/* Project Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Project</h2>
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                className="mt-1 block w-full text-gray-700"
                accept="image/*"
                onChange={(e) => setProjectImage(e.target.files ? e.target.files[0] : null)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
