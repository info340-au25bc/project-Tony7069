import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './Header.jsx';
import HomePageBody from './HomePageBody.jsx'
import EmptyPost from './empty-post.jsx';
import PostPosition from './post-position.jsx';

export default function App(props) {
    return (
        <div>
            <Header />
            <HomePageBody />
            <PostPosition />
            <EmptyPost />
        </div>
    )
}
