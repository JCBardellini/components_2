import React, { useState } from "react";
import "./index.css";

/*
I need to make a form, inside the form, need to have inputs that will take the username, img and img.
after putting in all the information, i need to push it into the array to create the profile
i would need to create an object of username, img, bio --- after that i will need to push into the array of profile
lets make this dynamic 
*/
const UserProfileCard = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userBio, setUserBio] = useState("");
  const [profile, setProfile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userProfile = {
      name: userName,
      image: userImage,
      bio: userBio,
    };
    setProfile([...profile, userProfile]);

    setUserName("");
    setUserImage("");
    setUserBio("");
  };

  const profileDisplay = profile.map((profile, index) => {
    return (
      <div className="card" key={index}>
        <h3>{profile.name}</h3>
        <img src={profile.image} alt={profile.image} />
        <p>{profile.bio}</p>
      </div>
    );
  });
  return (
    <div id="user-container">
      <h2>User Profile Card</h2>
      <form id="user" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="img">Image</label>
        <input
          type="text"
          id="img"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
        />
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {profileDisplay}
    </div>
  );
};

export default UserProfileCard;
