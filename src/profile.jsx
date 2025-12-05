import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';
import users from "./data/users.json";

import { getDatabase, ref, get, set as firebaseSet } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Profile(props) {
  const navigate = useNavigate();
  const db = getDatabase();
  const reference = ref(db, "Users");

  const [matchedUser, setMatchedUser] = useState(null);
  useEffect(() => {
    const db = getDatabase();
    const reference = ref(db, "Users");

    get(reference).then(snapshot => {
      if (!snapshot.exists()) return;

      const allUsers = Object.values(snapshot.val());
      const match = allUsers.find(u => u.username === props.currentUser); //Assuming no same username
      console.log("Matched user:", match);
      setMatchedUser(match || null);
    }).catch(err => {
      console.error("Error:", err);
    });
  }, [props.currentUser]);

  let user = {
    email: 'Not logged in', // this shounldn't ever appear but just for safety
    firstName: '',
    lastName: '',
    preferredName: '',
    region: '',
    languages: '',
  };

  if (matchedUser) {
    user = {
      email: matchedUser.email || 'N/A',
      firstName: matchedUser.firstName || 'N/A',
      lastName: matchedUser.lastName || 'N/A',
      preferredName: matchedUser.preferredName || 'N/A',
      region: matchedUser.region || 'N/A',
      languages: matchedUser.languages || 'N/A',
    };
  }

  // No tags saving function yet, cannot be completed before due date, exclude from 2.5 functions
  // This following sections are just for potential future improvement
  let userTags = matchedUser?.userTags || [];
  const userTagsRenderList = userTags.map((tag, index) => {
      return (
        <h2 key={index}>{tag}</h2>
      )
  });
                

  const handleUpdateInfo = () => {
    if (user.email === 'Not logged in') {
      navigate('/');
    } else {
      navigate('/edit-profile');
    }
  };

  const handleUpdateTags = () => {
    if (user.email === 'Not logged in') {
      navigate('/');
    } else {
      navigate('/edit-tags');
    }
  };

  const handleBack = () => {
    navigate('/homepage');
  };

  return (
    <div className="profile-page">
      <section className="navbar">
        <SpecialNav />
      </section>

      <section className="profile-page-content">
        <div className="profile-page-container">
          <div className="profile-page-title-section-container">
            <div className="profile-page-title-box">
              <h1 className="profile-page-boxes-titles">User Profile</h1>
            </div>
          </div>

          <div className="profile-page-information-sections-container">
            <div className="profile-page-info-box">
              <h1 className="profile-page-boxes-titles">User Info</h1>
              <h2>Email: {user.email}</h2>
              <h2>Name: {user.firstName} {user.lastName}</h2>
              <h2>Preferred Name: {user.preferredName}</h2>
              <h2>Region: {user.region}</h2>
              <h2>Language: {user.languages}</h2>
              <button className="profile-page-button" onClick={handleUpdateInfo}>
                <h2>Update Info</h2>
              </button>
            </div>

            <div className="profile-page-tags-box">
              <h1 className="profile-page-boxes-titles">Tags</h1>
              {userTagsRenderList}
              <button className="profile-page-button" onClick={handleUpdateTags}>
                <h2>Update Info</h2>
              </button>
            </div>
          </div>

          <button className="profile-page-button" onClick={handleBack}>
            back
          </button>
        </div>
      </section>
    </div>
  );
}