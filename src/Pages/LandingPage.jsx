import React from "react";
import { FaHeartbeat, FaRegHospital } from "react-icons/fa";
import WatsonAssistantChat from "../components/WatsonXComponent";

const LandingPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-black py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Ally Care</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-blue-700">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          Access world-class medical facilities and expert advice from the
          comfort of your home.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4 bg-black">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 rounded-lg shadow-md text-center">
            <FaHeartbeat className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">24/7 Monitoring</h3>
            <p className="text-gray-400">
              Real-time health tracking and alerts for critical conditions.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md text-center">
            <FaRegHospital className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Hospital Locator</h3>
            <p className="text-gray-400">
              Find the nearest medical facilities in emergencies.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md text-center">
            <FaHeartbeat className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Virtual Consultations</h3>
            <p className="text-gray-400">
              Connect with top doctors from your home.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6">
        <p>&copy; 2024  Ally Care . All rights reserved.</p>
      </footer>

      {/* Watson Assistant Chat */}
      <WatsonAssistantChat />
    </div>
  );
};

export default LandingPage;
