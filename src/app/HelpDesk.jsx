import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSupport } from "react-icons/hi"; // Optional: Install react-icons if not yet

const HelpDesk = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <HiOutlineSupport className="text-primary w-16 h-16" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Help Desk</h1>
        <p className="text-gray-600 text-lg mb-4">
          Currently, no help desk is available.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Our support team is not online right now. You can reach out through our contact page, and we’ll get back to you as soon as possible.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-700 transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default HelpDesk;
