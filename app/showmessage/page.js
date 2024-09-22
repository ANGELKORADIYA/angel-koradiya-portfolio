"use client";
import { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [selectedMessage, setSelectedMessage] = useState(null); // Stores the message to be viewed in the popup

  useEffect(() => {
    const fetchMessages = async () => {
      const namex = prompt("Enter Username:", "ak47");
      const password = prompt("Enter Password:", "ak@123");

      if (!namex || !password) {
        setError('Username and password are required!');
        setLoading(false);
        return;
      }

      const body = JSON.stringify({ name: namex, password: password });
      const headers = { 'Content-Type': 'application/json' };

      try {
        const response = await fetch('/api/messages', { method: 'POST', body, headers });
        
        if (!response.ok) {
          throw new Error('Failed to fetch messages.');
        }

        const data = await response.json();
        setMessages(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const sortMessages = (field) => {
    const sortedMessages = [...messages].sort((a, b) => {
      if (field === 'name') {
        return a.name.localeCompare(b.name);
      } else if (field === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setMessages(sortedMessages);
    setSortBy(field);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      closeModal();
    }
  };

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">All Messages</h1>

        {/* Sorting Options */}
        <div className="flex justify-end mb-4">
          <label className="font-semibold mr-2">Sort by:</label>
          <button
            className={`px-3 py-1 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md mr-2`}
            onClick={() => sortMessages('name')}
          >
            Name
          </button>
          <button
            className={`px-3 py-1 ${sortBy === 'date' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md`}
            onClick={() => sortMessages('date')}
          >
            Date
          </button>
        </div>

        {/* Messages List */}
        <ul className="grid grid-cols-1 gap-4">
          {messages.map((msg, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-md shadow-md hover:bg-gray-100 transition cursor-pointer"
              onClick={() => setSelectedMessage(msg)} // Opens the modal with the message content
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{msg.name} <span className="text-sm text-gray-500">({msg.email})</span></div>
                <div className="text-sm text-gray-500">{new Date(msg.date).toLocaleDateString()}</div>
              </div>
              <p className="mt-2 text-gray-700 truncate">{msg.message}</p>
            </li>
          ))}
        </ul>

        {/* Modal Popup for Full Message */}
        {selectedMessage && (
          <div
            id="modal-backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleBackdropClick} // Closes the modal if clicked outside the modal content
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">{selectedMessage.name} ({selectedMessage.email})</h2>
              <p className="text-gray-700">{selectedMessage.message}</p>
              <div className="text-sm text-gray-500 mt-4">
                Sent on: {new Date(selectedMessage.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
