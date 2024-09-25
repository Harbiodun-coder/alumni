import React from "react";
import Header from "@/components/Header";

const AccountSettings = () => {
  return (
    <div>
      <Header />
    <div className="flex pt-20">
      {/* Sidebar */}
      <aside className="bg-white p-6 shadow-lg min-h-[300px] m-4 h-10 items-center ">
        <nav>
          <ul>
            <li className="mb-4 flex items-center">
              <img src="/account.png" alt="Account" className="w-6 h-6 mr-3" />
              <a href="#" className="font-semibold text-gray-700">Account</a>
            </li>
            <li className="mb-4 flex items-center">
              <img src="/notification.png" alt="Notifications" className="w-6 h-6 mr-3" />
              <a href="#" className="text-gray-600 hover:text-gray-800">Notifications</a>
            </li>
            <li className="mb-4 flex items-center">
              <img src="/privacy.png" alt="Privacy and Safety" className="w-6 h-6 mr-3" />
              <a href="#" className="text-gray-600 hover:text-gray-800">Privacy and safety</a>
            </li>
            <li className="mb-4 flex items-center">
              <img src="/connect.jpg" alt="Communications" className="w-6 h-6 mr-3" />
              <a href="#" className="text-gray-600 hover:text-gray-800">Communications</a>
            </li>
            <li className="mb-4 flex items-center">
              <img src="/chats.png" alt="Messaging" className="w-6 h-6 mr-3" />
              <a href="#" className="text-gray-600 hover:text-gray-800">Messaging</a>
            </li>
            <li className="mb-4 flex items-center">
              <img src="/close.png" alt="Close account" className="w-6 h-6 mr-3" />
              <a href="#" className="text-gray-600 hover:text-gray-800">Close account</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Account Settings Form */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              {/* First Row */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Sam" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Larson" />
              </div>

              {/* Second Row */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional name</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Additional name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
                <input type="date" className="w-full border border-gray-300 rounded p-2" />
              </div>

              {/* Third Row */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="danielsam" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                <input type="tel" className="w-full border border-gray-300 rounded p-2" placeholder="(123) 456-7891" />
              </div>

              {/* Fourth Row */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded p-2" placeholder="sam@webastica.com" />
              </div>
            </div>

            {/* Team Invitation Checkbox */}
            <div className="mt-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-700">Allow anyone to add you to their team</span>
              </label>
            </div>

            {/* Save Changes Button */}
            <div className="mt-6 text-right">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save changes</button>
            </div>
          </form>
        </section>

        {/* Password Change Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Change your password</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current password</label>
                <input type="password" className="w-full border border-gray-300 rounded p-2" placeholder="Enter current password" />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New password</label>
                <input type="password" className="w-full border border-gray-300 rounded p-2" placeholder="Create new password" />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm password</label>
                <input type="password" className="w-full border border-gray-300 rounded p-2" placeholder="Confirm new password" />
              </div>
            </div>

            {/* Update Password Button */}
            <div className="mt-6 text-right">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update password</button>
            </div>
          </form>
        </section>
      </main>
    </div>
    </div>
  );
};

export default AccountSettings;
