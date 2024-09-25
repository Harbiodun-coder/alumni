import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; 
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profile, setProfile] = useState(null); // Define profile state
  const [error, setError] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

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
    <nav className="bg-white shadow fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/lsu.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </div>

          {/* Center Section: Search Bar */}
          <div className="relative w-full max-w-xs hidden sm:block">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch />
            </div>
          </div>

          {/* Right Section: Icons and Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Pages and My Network (Visible on large screens) */}
            <div className="hidden sm:flex gap-6 items-center">
              {/* Pages Dropdown */}
              <div className="relative">
                <button
                  className="nav-link text-gray-700 font-medium focus:outline-none transition-all"
                  onClick={togglePagesDropdown}
                  aria-haspopup="true"
                  aria-expanded={isPagesOpen ? "true" : "false"}
                >
                  Pages
                  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-10 transition-all duration-300 ease-in-out transform origin-top ${isPagesOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                  <ul onMouseLeave={() => setIsPagesOpen(false)}>
                    <li><Link href="/messaging" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Messaging</Link></li>
                    <li><Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link></li>
                    <li><Link href="/groups" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Groups</Link></li>
                    <li><Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</Link></li>
                  </ul>
                </div>
              </div>

              <Link href="/network" className="text-gray-700 font-medium hover:underline">My Network</Link>
            </div>

            {/* Mobile Menu Icon for "Pages" and "My Network" */}
            <div className="sm:hidden">
              <button className="text-gray-700 text-xl focus:outline-none" onClick={toggleMobileMenu}>
                <HiOutlineMenuAlt3 />
              </button>
              {isMobileMenuOpen && (
                <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li>
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left" onClick={togglePagesDropdown}>
                        Pages
                        <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      {isPagesOpen && (
                        <div className="ml-4 mt-2">
                          <ul>
                            <li><Link href="/messaging" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Messaging</Link></li>
                            <li><Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link></li>
                            <li><Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</Link></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li><Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Network</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Icons Section */}
            <Link href="/messaging">
              <BsChatLeftTextFill className="text-gray-700 text-xl font-bold cursor-pointer" />
            </Link>
            <Link href="/settings">
              <IoMdSettings className="text-gray-700 text-xl font-bold cursor-pointer" />
            </Link>
           
            <div className="relative">
              <IoMdNotificationsOutline className="text-gray-700 text-xl font-bold cursor-pointer" onClick={toggleNotificationsDropdown} />
              {isNotificationsOpen && (
                <div className="relative">
                  <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    {/* Notifications content here */}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <Image
                src="/05.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer"
                onClick={toggleProfileDropdown}
              />
              {isProfileOpen && profile && ( 
                <div className="absolute right-0 mt-2  w-[200px] bg-white shadow-lg border rounded-md z-10">
                  <div className="px-4 py-2 flex items-center">
                    <div className="flex gap-4 items-center">
                      <Image src="/05.jpg" alt="User Avatar" width={50} height={100} className="rounded-full" />
                      <div>
                        <a className="font-semibold text-gray-800" href="#">{profile?.username}</a>
                        <p className="text-xs text-gray-500">{profile?.current_job}</p>
                      </div>
                    </div>
                  </div>
                  <a className="block text-center text-sm bg-blue-100 text-blue-600 rounded px-2 py-2 hover:bg-blue-200" href="my-profile.html">View profile</a>
                  <div className="border-t border-gray-200"></div>
                  <ul>
                    <li>
                      <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" href="settings.html">
                        <i className="bi bi-gear fa-fw mr-2"></i>Settings & Privacy
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" href="https://lasu.edu.ng/home/contact/" target="_blank">
                        <i className="fa-fw bi bi-life-preserver mr-2"></i>Support
                      </a>
                    </li>
                    <li className="border-t border-gray-200"></li>
                    <li>
                      <a className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100" href="sign-in-advance.html">
                        <i className="bi bi-power fa-fw mr-2"></i>Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="flex items-center justify-center py-2 px-4 sm:hidden">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CiSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
