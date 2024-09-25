import Sidebar from "@/components/Sidebar";

import Header from "@/components/Header";
import StoryFeed from "@/components/StoryFeed";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex pt-16 bg-gray-100">
        <div className="hidden md:block  w-80 max-w-3xl m-4">
          <Sidebar />
        </div>

        <div className="flex-grow p-4 max-w-6xl w-full ">
          <StoryFeed />
        </div>
      </div>
    </div>
  );
}
