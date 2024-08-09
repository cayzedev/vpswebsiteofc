"use client";

import { useState, useEffect } from 'react';



export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user data from the API
    fetch('/api/register')
      .then(response => response.json())
      .then(data => {
        const user = data[0]; // Assuming the user is the first in the array
        setUsername(user.username);
        setEmail(user.email);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/register/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newUsername || username,
          email: newEmail || email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setUsername(newUsername || username);
        setEmail(newEmail || email);
        setMessage("Profile updated successfully!");
      } else {
        setMessage(data.error || "Profile update failed. Please try again.");
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage("Profile update failed. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-4 text-center">Your Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder={username}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder={email}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
            />
          </div>
          {message && <p className="text-red-500 text-center">{message}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-lg text-white font-semibold"
          >
            Update Profile
          </button>
        </form>
      </div>
    </main>
  );
}
