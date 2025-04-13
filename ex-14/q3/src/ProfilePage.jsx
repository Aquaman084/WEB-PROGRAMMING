import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    name: "Karthik S",
    email: "karthiks@gmail.com",
    bio: "University Student passionate about React.",
    imageUrl: "/src/pic.png",
    posts: ["Learning React!", "Building a profile page", "React is awesome!"],
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
