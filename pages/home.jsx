import Sidebar from "@/components/Sidebar";

import Header from "@/components/Header";
import StoryFeed from "@/components/StoryFeed";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex pt-16">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>

        <div className="flex-grow p-4 max-w-4xl mx-auto">
          <StoryFeed />
        </div>
      </div>
    </div>
  );
}
