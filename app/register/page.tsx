"use client";

import { useState } from "react";
import Image from "next/image"; // Import Image from next/image

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('/api/register', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration Successful! Redirecting to /dashboard in 3 seconds.");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 3000);
      } else {
        setError(data.error || "Sign up failed. Please try again.");
      }
    } catch (err) {
      setError("Sign up failed. Please try again.");
      console.error("Fetch error:", err); // Log error for debugging
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
      <header className="w-full bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image
              src="/gorilla-logo.png" // Replace with your logo
              alt="GorillaAttacker Logo"
              width={100}
              height={50}
              priority
            />
            <h1 className="text-2xl font-bold ml-4">GorillaAttacker</h1>
          </div>
          <nav className="space-x-6">
            <a href="/" className="hover:text-red-500 transition-colors duration-300">Home</a>
            <a href="#features" className="hover:text-red-500 transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-red-500 transition-colors duration-300">Pricing</a>
            <a href="#support" className="hover:text-red-500 transition-colors duration-300">Support</a>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-600">
          <h2 className="text-3xl font-extrabold mb-4 text-center">Sign Up</h2>
          <p className="text-lg mb-6 text-center">
            Create your account to get started with GorillaAttacker. Fill in the details below to sign up.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg font-semibold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
                placeholder="Your username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
                placeholder="Your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-red-500 focus:outline-none transition duration-300"
                placeholder="Confirm your password"
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {message && <p className="text-green-500 text-center">{message}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-lg text-white font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <footer className="w-full bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} GorillaAttacker. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
