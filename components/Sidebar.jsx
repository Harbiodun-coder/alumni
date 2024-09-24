import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 p-4 shadow-lg">
      <div className="text-center">
        <Image
          src="/05.jpg"
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-2">Jim Samuel</h2>
        <p className="text-sm text-gray-600">Web Developer at LASU</p>
        <p className="text-gray-500 mt-2">
          I'd love to change the world, but they won't give me the source code.
        </p>
      </div>

      <div className="mt-4">
        <ul className="space-y-2">
          <li className="text-gray-700 font-medium">256 Posts</li>
          <li className="text-gray-700 font-medium">2.5K Followers</li>
          <li className="text-gray-700 font-medium">365 Following</li>
        </ul>
      </div>

      <div className="mt-4 space-y-2">
        <button className="block w-full py-2 px-4 bg-blue-500 text-white rounded-lg text-center">
          View Profile
        </button>
        <button className="block w-full py-2 px-4 border border-gray-300 rounded-lg text-center">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
