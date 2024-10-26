"use client";
import { useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [namex, setNamex] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const sortMessages = (field) => {
    const sortedMessages = [...messages].sort((a, b) =>
      field === 'name' ? a.name.localeCompare(b.name) : new Date(b.date) - new Date(a.date)
    );
    setMessages(sortedMessages);
    setSortBy(field);
  };

  const closeModal = () => setSelectedMessage(null);

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  };

  const fetchMessages = async (e) => {
    e.preventDefault();
    if (!namex || !password) {
      setError('Username and password are required!');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: namex, password: password }),
      });

      if (!response.ok) throw new Error('Failed to fetch messages.');
      
      const data = await response.json();
      setMessages(data);
      setAuth(true);
    } catch (error) {
      setError(error.message);
      setAuth(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAuth(false);
    setMessages([]);
    setNamex('');
    setPassword('');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center transition-all duration-500 ease-in-out">
      {!auth && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mt-20 transition-opacity duration-500 ease-in-out">
          <form className="flex flex-col gap-4" onSubmit={fetchMessages}>
            <label className="text-lg font-semibold">ID:</label>
            <input
              type="text"
              value={namex}
              onChange={(e) => setNamex(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <label className="text-lg font-semibold">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
          {error && <div className="text-red-500 mt-4">{error}</div>}
          {loading && <div className="mt-4">Loading messages...</div>}
        </div>
      )}

      {auth && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mt-20 transition-all duration-500 ease-in-out">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-center">All Messages</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>

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

          <ul className="grid grid-cols-1 gap-4">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-md shadow-md hover:bg-gray-100 transition cursor-pointer"
                onClick={() => setSelectedMessage(msg)}
              >
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">
                    {msg.name} <span className="text-sm text-gray-500">({msg.email})</span>
                  </div>
                  <div className="text-sm text-gray-500">{new Date(msg.date).toLocaleDateString()}</div>
                </div>
                <p className="mt-2 text-gray-700 truncate">{msg.message}</p>
              </li>
            ))}
          </ul>

          {selectedMessage && (
            <div
              id="modal-backdrop"
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={handleBackdropClick}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold mb-4">
                  {selectedMessage.name} ({selectedMessage.email})
                </h2>
                <p className="text-gray-700">{selectedMessage.message}</p>
                <div className="text-sm text-gray-500 mt-4">
                  Sent on: {new Date(selectedMessage.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
