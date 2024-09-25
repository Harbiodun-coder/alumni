import React, { useState, useEffect } from "react";
import Image from "next/image";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem('alumni');
    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const response = await fetch('/api/users/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data.data);
      console.log('Profile Data:', data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative mb-6">
        {profile && (
          <>
            <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/bgg.jpg')" }}></div>
            <div className="absolute -bottom-12 left-8">
              <Image 
                src={profile.image || "/13.jpg"} 
                width={96} 
                height={96} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg" 
              />
            </div>
          </>
        )}
      </div>

      {profile && (
        <div className="flex justify-between items-center mb-6">
          <div className="ml-36">
            <h2 className="text-2xl font-bold">{profile.username || "User Name"} <span className="text-green-500">●</span></h2>
            <p className="text-gray-600">{profile.current_job|| "Current Job Title"}</p>
            <p className="text-gray-500">Joined on {profile.joinedDate || "Nov 26, 2019"} • {profile.connections || "250"} connections</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
