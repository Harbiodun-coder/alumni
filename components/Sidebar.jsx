import Image from "next/image";
import Link from "next/link";


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
          I&#39;d love to change the world, but they won&#39;t give me the source code.
        </p>
      </div>

      <div className="mt-4 mb-4">
        <ul className="flex justify-around items-center">
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">256</span>
            <span className="text-gray-500 text-sm">Posts</span>
          </li>
          <div className="border-l border-gray-300 h-8 mx-4"></div>
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">2.5K</span>
            <span className="text-gray-500 text-sm">Followers</span>
          </li>
          <div className="border-l border-gray-300 h-8 mx-4"></div>
          <li className="text-center">
            <span className="block text-gray-700 font-bold text-md">365</span>
            <span className="text-gray-500 text-sm">Following</span>
          </li>
        </ul>
      </div>

      <hr />

      <ul>
        <li>
          <Link
            href="/messaging"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-3 font-bold "
          >
            <Image
              src="/feed.png"
              alt="Profile Image"
              width={32}
              height={32}
              className="rounded-full "
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
              alt="Profile Image"
              width={32}
              height={32}
              className="rounded-full "
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
              alt="Profile Image"
              width={32}
              height={32}
              className="rounded-full "
            />
            Latest News
          </Link>
        </li>
       
        <li>
          <Link
            href="/blog"
            className="flex gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 font-bold"
          >
            <Image
              src="/notification.png"
              alt="Profile Image"
              width={32}
              height={32}
              className="rounded-full "
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
              alt="Profile Image"
              width={32}
              height={32}
              className="rounded-full "
            />
            Settings
          </Link>
        </li>
      </ul>

      <hr />

      <div className="mt-4 space-y-2">
        <button className="block w-full py-2 px-4  text-blue-500 rounded-lg text-center">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
