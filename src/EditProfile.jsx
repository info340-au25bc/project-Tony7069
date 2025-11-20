import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';

export default function EditProfile(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: props.currentUserData?.firstName || '',
    lastName: props.currentUserData?.lastName || '',
    preferredName: props.currentUserData?.preferredName || '',
    region: props.currentUserData?.region || '',
    languages: props.currentUserData?.languages || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.onUpdate(formData);
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
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