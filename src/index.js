import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css'

import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Blog from './pages/Blog';
// ...other imports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    {/* Routes for Home, Blog pages, etc. */} 
  </BrowserRouter>
);