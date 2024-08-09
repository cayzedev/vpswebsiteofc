"use client";

import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSendAttack = () => {
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-white">
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
            <a href="/dashboard" className="hover:text-red-500 transition-colors duration-300">Dashboard</a>
            <a href="/profile" className="hover:text-red-500 transition-colors duration-300">Profile</a>
            <a href="/settings" className="hover:text-red-500 transition-colors duration-300">Settings</a>
            <a href="/logout" className="hover:text-red-500 transition-colors duration-300">Logout</a>
          </nav>
        </div>
      </header>

      <section className="flex-1 p-8">
        <div className="container mx-auto flex">
          <div className="flex-1 pr-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
              <div className="flex space-x-6">
                <div className="bg-gray-700 p-4 rounded-lg flex-1 shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">Active Attacks</h3>
                  <p className="text-gray-400">Manage your ongoing attacks.</p>
                  <button className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg flex-1 shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">Account Status</h3>
                  <p className="text-gray-400">View your account status and settings.</p>
                  <button className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                      <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Activity</th>
                      <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    <tr>
                      <td className="py-3 px-6 text-sm">2024-08-01</td>
                      <td className="py-3 px-6 text-sm">Started new attack</td>
                      <td className="py-3 px-6 text-sm text-green-500">Success</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 text-sm">2024-08-02</td>
                      <td className="py-3 px-6 text-sm">Stopped attack</td>
                      <td className="py-3 px-6 text-sm text-red-500">Failed</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Attack Hub</h2>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">DDoS - Your target here</h3>
                <div className="space-y-4">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="url" className="text-sm font-medium">URL</label>
                    <input
                      id="url"
                      type="text"
                      placeholder="Enter target URL"
                      className="mt-1 p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="time" className="text-sm font-medium">TIME</label>
                    <input
                      id="time"
                      type="number"
                      placeholder="Enter time (seconds)"
                      className="mt-1 p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="requests" className="text-sm font-medium">REQUESTS</label>
                    <input
                      id="requests"
                      type="number"
                      placeholder="Enter number of requests"
                      className="mt-1 p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSendAttack}
                    className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300"
                  >
                    Send Attack
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="w-80 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Plan Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Plan:</span>
                <span>Free Plan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Expiration:</span>
                <span>N/A</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">API Access:</span>
                <span className="text-red-500">false</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">This button is currently under work!</p>
          </div>
        </div>
      )}

      <footer className="w-full bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} GorillaAttacker. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
