import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from './Homepage.jsx';
import EmptyPost from './empty-post.jsx';
import PostPosition from './post-position.jsx';
import LoginPage from './log-in-page.jsx';
import SavedPosts from './saved-posts.jsx';

export default function App() {

  const [allAddedOpportunities, setAllAddedOpportunities] = useState([]);

  function addToList(newOpportunity) {
    setAllAddedOpportunities(beforeUpdate => [...beforeUpdate, newOpportunity]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage allAddedOpportunities={allAddedOpportunities}/>} />
        <Route path="/create-post" element={<EmptyPost />} />
        <Route path="/position" element={<PostPosition addToList={addToList}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/saved-posts" element={<SavedPosts />} />
      </Routes>

      <footer>
        <p>Copy right: ... Contact Info: ...</p>
      </footer>
    </>
  );
}

// Test
