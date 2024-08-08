"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
      <header className="w-full bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image
              src="/gorilla-logo.png"
              alt="GorillaAttacker Logo"
              width={100}
              height={50}
              priority
            />
            <h1 className="text-2xl font-bold ml-4">GorillaAttacker</h1>
          </div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Features</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Support</a>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-600">
          <h2 className="text-4xl font-extrabold mb-4">GorillaAttacker</h2>
          <p className="text-lg mb-6">
            The ultimate tool for launching DDoS attacks with precision and control. Join now and take control of your attack strategies.
          </p>
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-transform transform hover:scale-105 duration-300"
          >
            Sign Up
          </a>
        </div>
      </section>

      <section className="w-full bg-gray-800 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Launch Attack</h3>
            <p className="text-gray-300">
              Customize and start a new attack with our powerful tools. Tailor your attack settings and unleash the power.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Attack History</h3>
            <p className="text-gray-300">
              Review and manage your previous attacks. Analyze results and make informed decisions for future actions.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <p className="text-gray-300">
              Check out our competitive pricing plans. Choose the one that fits your needs and budget.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-300">
              Get assistance from our dedicated support team. We're here to help you with any issues or questions.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 py-4 text-center">
        <p className="text-gray-400">&copy; 2024 GorillaAttacker. All rights reserved.</p>
      </footer>
    </main>
  );
}
