import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';

export default function EditTags(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userTags: props.currentUserData?.userTags || '',
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
              <h1 className="profile-page-boxes-titles">Edit Tags</h1>
            </div>
          </div>

          <form className="edit-profile-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="userTags">Tags</label>
              <input
                id="userTags"
                type="text"
                name="userTags"
                value={formData.userTags}
                onChange={handleChange}
                placeholder="Enter tags"
              />
            </div>

            <div className="edit-profile-buttons">
              <button type="submit" className="save-btn">Save Changes</button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
