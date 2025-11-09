import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route } from "react-router-dom";

import Homepage from './Homepage.jsx';
import EmptyPost from './empty-post.jsx';
import PostPosition from './post-position.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-post" element={<EmptyPost />} />
        <Route path="/position" element={<PostPosition />} />
      </Routes>
    </>
  );
}
