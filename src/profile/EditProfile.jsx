import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from '../Post-Position/SpecialNav.jsx';
import { getDatabase, ref, get, set as firebaseSet } from 'firebase/database';
import { useState, useEffect } from 'react';

export default function EditProfile(props) {
  const navigate = useNavigate();
  const db = getDatabase();
  const reference = ref(db, "Users");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    get(reference)
      .then(snapshot => {
        if (!snapshot.exists()) return;
        const allUsers = Object.values(snapshot.val());
        const match = allUsers.find(u => u.username === props.currentUser);
        setUserData(match || null);
        console.log("Loaded user in EditProfile:", match);
      })
      .catch(err => console.error("Error", err));
  }, [props.currentUser]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredName: '',
    region: '',
    languages: '',
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || 'N/A',
        lastName: userData.lastName || 'N/A',
        preferredName: userData.preferredName || 'N/A',
        region: userData.region || 'N/A',
        languages: userData.languages || 'N/A',
      });
    }
  }, [userData]);

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData(previousState => {
      return {...previousState, [fieldName]: fieldValue};
    });
  }

  function handleSave(event) {
    event.preventDefault();
    get(reference)
      .then(snapshot => {
        const usersArray = snapshot.val();
        const updatedUsers = usersArray.map(user => {
          if (user.username === props.currentUser) {
            return {
              ...user,
              firstName: formData.firstName,
              lastName: formData.lastName,
              preferredName: formData.preferredName,
              region: formData.region,
              languages: formData.languages
            };
          }
          return user;
        });
        return firebaseSet(reference, updatedUsers);
      })
      .then(() => {
        console.log("User profile updated successfully!!!");
        navigate('/profile');
      })
      .catch(err => {
        console.error("Error:", err);
      });
  }


  function handleCancel() {
    navigate('/profile');
  }

  return (
    <div className="profile-page">
      <section className="navbar">
        <SpecialNav />
      </section>

      <section className="profile-page-content">
        <div className="profile-page-container">
          <div className="profile-page-title-section-container">
            <div className="profile-page-title-box">
              <h1 className="profile-page-boxes-titles">Edit Profile</h1>
            </div>
          </div>

          <form className="edit-profile-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredName">Preferred Name</label>
              <input
                id="preferredName"
                type="text"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleChange}
                placeholder="Enter preferred name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                id="region"
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Enter region/city, state"
              />
            </div>

            <div className="form-group">
              <label htmlFor="languages">Languages</label>
              <input
                id="languages"
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="Enter languages (comma-separated)"
              />
            </div>

            <div className="edit-profile-buttons">
              <button type="submit" className="profile-save-btn">Save Changes</button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}