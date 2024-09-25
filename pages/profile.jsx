import React from "react";
import UserProfile from "@/components/UserProfile";

import ProfileSidebar from "@/components/ProfileSideBar";
import ProfileTabs from "@/components/ProfileTabs";

import StoryFeed from "@/components/StoryFeed";
import Header from "@/components/Header";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex mt-20">
        <div className="w-2/3">
          <UserProfile />
          <ProfileTabs />
          <StoryFeed />
        </div>
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default ProfilePage;
