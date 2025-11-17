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

export default function App() {

  const [allAddedOpportunities, setAllAddedOpportunities] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  function addToList(newOpportunity) {
    setAllAddedOpportunities(beforeUpdate => [...beforeUpdate, newOpportunity]);
  }

  function alterCurrentUser(username) {
    setCurrentUser(username);
    console.log(username);
  }

  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Homepage allAddedOpportunities={allAddedOpportunities}/>} />
        <Route path="/create-post" element={<EmptyPost />} />
        <Route path="/position" element={<PostPosition addToList={addToList}/>} />
        <Route index element={<LoginPage alterCurrentUser={alterCurrentUser}/>} />
        <Route path="/welcome" element={<Welcome username={currentUser} />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/saved-posts" element={<SavedPosts allAddedOpportunities={allAddedOpportunities} user={currentUser}/>} />
      </Routes>

      <footer>
        <p>Copy right: ... Contact Info: ...</p>
      </footer>
    </>
  );
}

// Test
