import React from "react";

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-6">
   
      <div className="relative mb-6">
        <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/bgg.jpg')" }}></div>
        <div className="absolute -bottom-12 left-8">
          <img src="/13.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="ml-36">
          <h2 className="text-2xl font-bold">Jim Samuel <span className="text-green-500">●</span></h2>
          <p className="text-gray-600">Lead Developer</p>
          <p className="text-gray-500">Joined on Nov 26, 2019 • 250 connections</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
