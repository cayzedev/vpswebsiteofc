"use client";

import Image from "next/image";

export default function Home() {
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
            <h1 className="text-2xl font-bold ml-4">GorillaAttacker - #1 DDoS Tool</h1>
          </div>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-red-500 transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-red-500 transition-colors duration-300">Pricing</a>
            <a href="#support" className="hover:text-red-500 transition-colors duration-300">Support</a>
            <a href="/register" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-transform transform hover:scale-105 duration-300">Sign Up</a>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-600">
          <h2 className="text-4xl font-extrabold mb-4">GorillaAttacker - #1 DDoS Tool</h2>
          <p className="text-lg mb-6">
            The ultimate tool for launching DDoS attacks with precision and control. Join now and take control of your attack strategies.
          </p>
          <a
            href="/register"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-transform transform hover:scale-105 duration-300"
          >
            Sign Up
          </a>
        </div>
      </section>

      <section id="features" className="w-full bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Advanced Targeting</h3>
              <p className="text-gray-300">
                Precision targeting options allow you to launch attacks with specific parameters.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-300">
                Track the progress of your attacks in real-time with our intuitive dashboard.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">High Success Rate</h3>
              <p className="text-gray-300">
                Our sophisticated methods ensure a high success rate for your attack missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {/* Free Plan */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
              <p className="text-gray-300 mb-4">$0/month</p>
              <ul className="text-gray-300 space-y-2">
                <li><span className="text-green-500">&#10003;</span> 60 seconds of attack time</li>
                <li><span className="text-green-500">&#10003;</span> 64 bots</li>
                <li><span className="text-red-500">&#10007;</span> Premium Features</li>
                <li><span className="text-red-500">&#10007;</span> Priority Support</li>
                <li><span className="text-red-500">&#10007;</span> Advanced Targeting</li>
              </ul>
            </div>
            {/* Basic Plan */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-gray-300 mb-4">$19/month</p>
              <ul className="text-gray-300 space-y-2">
                <li><span className="text-green-500">&#10003;</span> 120 seconds of attack time</li>
                <li><span className="text-green-500">&#10003;</span> 128 bots</li>
                <li><span className="text-yellow-500">&#10007;</span> Premium Features</li>
                <li><span className="text-red-500">&#10007;</span> Priority Support</li>
                <li><span className="text-red-500">&#10007;</span> Advanced Targeting</li>
              </ul>
            </div>
            {/* Pro Plan */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-gray-300 mb-4">$49/month</p>
              <ul className="text-gray-300 space-y-2">
                <li><span className="text-green-500">&#10003;</span> 300 seconds of attack time</li>
                <li><span className="text-green-500">&#10003;</span> 256 bots</li>
                <li><span className="text-green-500">&#10003;</span> Premium Features</li>
                <li><span className="text-yellow-500">&#10007;</span> Priority Support</li>
                <li><span className="text-red-500">&#10007;</span> Advanced Targeting</li>
              </ul>
            </div>
            {/* Premium Plan */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
              <p className="text-gray-300 mb-4">$99/month</p>
              <ul className="text-gray-300 space-y-2">
                <li><span className="text-green-500">&#10003;</span> 600 seconds of attack time</li>
                <li><span className="text-green-500">&#10003;</span> 512 bots</li>
                <li><span className="text-green-500">&#10003;</span> Premium Features</li>
                <li><span className="text-green-500">&#10003;</span> Priority Support</li>
                <li><span className="text-yellow-500">&#10007;</span> Advanced Targeting</li>
              </ul>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-gray-300 mb-4">Contact Us</p>
              <ul className="text-gray-300 space-y-2">
                <li><span className="text-green-500">&#10003;</span> Unlimited attack time</li>
                <li><span className="text-green-500">&#10003;</span> Unlimited bots</li>
                <li><span className="text-green-500">&#10003;</span> Premium Features</li>
                <li><span className="text-green-500">&#10003;</span> Priority Support</li>
                <li><span className="text-green-500">&#10003;</span> Advanced Targeting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="w-full bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Support</h2>
          <p className="text-lg mb-6">
            Our support team is available to assist you with any issues or questions you may have. Reach out to us through the following channels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-300">
                Get assistance through email at support@gorillaattacker.com
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-300">
                Chat with our support team in real-time through our website's chat feature.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-300">
                Reach us by phone at +1-800-123-4567 for immediate assistance.
              </p>
            </div>
          </div>
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
