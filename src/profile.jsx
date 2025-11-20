import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';
import users from "./data/users.json";

export default function Profile(props) {
  const navigate = useNavigate();

  let user = {
    email: 'Not logged in',
    firstName: 'Not logged in',
    lastName: '',
    preferredName: '',
    region: '',
    languages: '',
  };

  if (props.currentUserData) {
    user = {
      email: props.currentUserData.email || 'N/A',
      firstName: props.currentUserData.firstName || 'N/A',
      lastName: props.currentUserData.lastName || 'N/A',
      preferredName: props.currentUserData.preferredName || 'N/A',
      region: props.currentUserData.region || 'N/A',
      languages: props.currentUserData.languages || 'N/A',
    };
  }

  const userTags = props.currentUserData?.userTags || [];

  const handleUpdateInfo = () => {
    navigate('/edit-profile');
  };

  const handleUpdateTags = () => {
    navigate('/edit-tags');
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
              <h2>{user.email}</h2>
              <h2>{user.firstName} {user.lastName}</h2>
              <h2>{user.preferredName}</h2>
              <h2>{user.region}</h2>
              <h2>{user.languages}</h2>
              <button className="profile-page-button" onClick={handleUpdateInfo}>
                <h2>Update Info</h2>
              </button>
            </div>

            <div className="profile-page-tags-box">
              <h1 className="profile-page-boxes-titles">Tags</h1>
              {userTags.map((tag, index) => (
                <h2 key={index}>{tag}</h2>
              ))}
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