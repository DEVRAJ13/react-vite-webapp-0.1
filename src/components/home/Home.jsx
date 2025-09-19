// src/App.jsx
import React from "react";
import me from "../../assets/me.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Top Badge */}
      <div className="flex items-center space-x-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-sm text-gray-600 font-medium">
          Available for work
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2">
        👋 Hello! I'm <span className="text-gray-900">DevRaj Thakur</span>
      </h1>


      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
        Software Developer
      </h2>

      <p className="text-gray-600 max-w-xl text-center mb-6">
        for startups to large organizations, transforming complex
        problems into simple solutions.
      </p>

      {/* Clients */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex -space-x-3">
     
            <img
             
              className="w-20 h-20 rounded-full border-2 border-white"
              src={me}
              alt="client"
            />
       
        </div>
        {/* <p className="text-gray-700 font-medium">
          100+ Happy And Satisfied Clients
        </p> */}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        {/* <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800">
          Get Started
        </button> */}
        <button className="px-6 py-3 bg-white border border-gray-300 font-semibold rounded-lg hover:bg-gray-50">
          Hire Me
        </button>
      </div>

      {/* Small note */}
      <p className="text-sm text-gray-500 mb-12">
        I work independently, offering exceptional value and quality in my
        services.
      </p>

      {/* Logos */}
      {/* <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
        <span className="font-semibold text-lg">Adobe</span>
        <span className="font-semibold text-lg">poptin</span>
        <span className="font-semibold text-lg">Up</span>
        <span className="font-semibold text-lg">Microsoft</span>
        <span className="font-semibold text-lg">BYJU’S</span>
      </div> */}
    </div>
  );
}
