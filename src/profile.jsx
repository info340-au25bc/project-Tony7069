import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';
import users from "./data/users.json";

export default function Profile(props) {
  const navigate = useNavigate();

  let user = {
    email: 'Not logged in',
    firstName: '',
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

  // let userTags = [];
  // if (props.currentUserData) {
  //   userTags = props.currentUserData.userTags;
  // }

  let userTags = props.currentUserData?.userTags || [];

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


        </div>
      </section>
      <button className="profile-page-button" onClick={handleBack}>back</button>
    </div>
  );
}