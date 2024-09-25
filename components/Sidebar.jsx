import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null); // Define error state
  const [isProfileOpen, setIsProfileOpen] = useState(true); // Assume profile is open for demonstration

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
      setProfile(data.data); // Set the profile data
      console.log('Profile Data:', data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="bg-white w-64 p-4 shadow-lg">
      {isProfileOpen && profile ? ( // Correct conditional rendering
        <div className="text-center">
          <Image
            src={profile.image || "/05.jpg"} // Fallback image
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-2">{profile.username || "User Name"}</h2>
          <p className="text-sm text-gray-600">{profile.jobTitle || "Web Developer at LASU"}</p>
          <p className="text-gray-500 mt-2">{profile.bio || "I’d love to change the world, but they won’t give me the source code."}</p>
        </div>
      ) : (
        <div className="text-center text-gray-500">Profile not found.</div>
      )}

      <div className="mt-4 mb-4">
        <ul className="flex justify-around items-center">
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">{profile.posts || 0}</span>
            <span className="text-gray-500 text-sm">Posts</span>
          </li>
          <div className="border-l border-gray-300 h-8 mx-4"></div>
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">{profile.followers || "0"}</span>
            <span className="text-gray-500 text-sm">Followers</span>
          </li>
          <div className="border-l border-gray-300 h-8 mx-4"></div>
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">{profile.following || "0"}</span>
            <span className="text-gray-500 text-sm">Following</span>
          </li>
        </ul>
      </div>

      <hr />

      <ul>
        <li>
          <Link
            href="/messaging"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-3 font-bold"
          >
            <Image
              src="/feed.png"
              alt="Feeds"
              width={32}
              height={32}
              className="rounded-full"
            />
            Feeds
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold"
          >
            <Image
              src="/connect.jpg"
              alt="Connections"
              width={32}
              height={32}
              className="rounded-full"
            />
            Connections
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold"
          >
            <Image
              src="/earth.png"
              alt="Latest News"
              width={32}
              height={32}
              className="rounded-full"
            />
            Latest News
          </Link>
        </li>
        <li>
          <Link
            href="/notifications"
            className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold"
          >
            <Image
              src="/notification.png"
              alt="Notifications"
              width={32}
              height={32}
              className="rounded-full"
            />
            Notifications
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold"
          >
            <Image
              src="/setting.png"
              alt="Settings"
              width={32}
              height={32}
              className="rounded-full"
            />
            Settings
          </Link>
        </li>
      </ul>

      <hr />

      <div className="mt-4 space-y-2">
        <button className="block w-full py-2 px-4 text-blue-500 rounded-lg text-center">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
