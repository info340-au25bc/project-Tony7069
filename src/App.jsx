import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from './Homepage.jsx';
import EmptyPost from './empty-post.jsx';
import PostPosition from './post-position.jsx';
import LoginPage from './log-in-page.jsx';
import SavedPosts from './saved-posts.jsx';
import Welcome from './Welcome.jsx';
import { InfoPage } from './info.jsx';
import Profile from './profile.jsx';
import EditProfile from './profile/EditProfile.jsx';
import EditTags from './profile/EditTags.jsx';
import RequireLogin from './require-login.jsx';
import UnderConstruction from './underconstruction.jsx';
import SignupPage from './Registration.jsx';

import { getDatabase, ref, get } from 'firebase/database';


export default function App() {

  const [currentUser, setCurrentUser] = useState(''); 

  function alterCurrentUser(username, userData) { 
    setCurrentUser(username);
    console.log(username);
  }
  
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Homepage currentUser={currentUser} />} />
        <Route path="/create-post" element={<EmptyPost />} />
        <Route path="/position" element={<PostPosition />} />
        <Route index element={<LoginPage alterCurrentUser={alterCurrentUser}/>} />
        <Route path="/welcome" element={<Welcome username={currentUser} />} />
        <Route path="/require-login" element={<RequireLogin />} />
        <Route path="/info/:position" element={<InfoPage />} />
        <Route path="/profile" element={<Profile currentUser={currentUser} />} />
        <Route path="/edit-profile" element={<EditProfile currentUser={currentUser} />} />
        <Route path="/edit-tags" element={<EditTags currentUser={currentUser} />} />
        <Route path="/saved-posts" element={<SavedPosts user={currentUser}/>} />
        <Route path="/underconstruction" element={<UnderConstruction />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <footer>
        <p>© 2025 Internshipper — Built by Tony Li & Thomas Gustafson</p>
      </footer>
    </>
  );
}
