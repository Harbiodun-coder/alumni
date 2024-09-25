const ProfileTabs = () => {
    return (
      <div className="border-b border-gray-300 mb-6">
        <ul className="flex space-x-8">
          <li className="text-blue-600 border-b-2 border-blue-600 pb-2">Posts</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">About</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Connections</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Media</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Videos</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Events</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Activity</li>
        </ul>
      </div>
    );
  };
  
  export default ProfileTabs;
  