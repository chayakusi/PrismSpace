import React from "react";
import userDp from '../src/assets/sampleavatar.jpg'
const UserProfile = () => {
const user = {
name: "Mickey Mouse",
email: "mickey@gmail.com",
bio: "I am digital artist and I love music, art and travelling.",
profilePicture: userDp
};
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={user.profilePicture} alt="User's profile picture" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
