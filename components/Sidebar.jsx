import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(true);

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
    <div className="bg-white w-64 p-4 shadow-lg">
      {isProfileOpen && profile && (
        <div className="text-center">
          <Image
            src={"/05.jpg"}
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-2">{profile?.username}</h2>
          <p className="text-sm text-gray-600 pb-2">{profile?.current_job}</p>
        </div>
      
      )}

      <hr />

      <ul>
        <li>
          <Link href="/messaging" className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-3 font-bold">
            <Image src="/feed.png" alt="Feeds" width={32} height={32} className="rounded-full" />
            Feeds
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold">
            <Image src="/connect.jpg" alt="Connections" width={32} height={32} className="rounded-full" />
            Connections
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold">
            <Image src="/earth.png" alt="Latest News" width={32} height={32} className="rounded-full" />
            Latest News
          </Link>
        </li>
        <li>
          <Link href="/notifications" className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold">
            <Image src="/notification.png" alt="Notifications" width={32} height={32} className="rounded-full" />
            Notifications
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold">
            <Image src="/setting.png" alt="Settings" width={32} height={32} className="rounded-full" />
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
