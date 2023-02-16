import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import PageImagineear from './components/Projects/Imagineear/PageImagineear.jsx'
import PageNFT from './components/Projects/NFT/PageNFT.jsx'
import PagePinpoint from './components/Projects/Pinpoint/PagePinpoint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/Imagineear" element={<PageImagineear />}/>
          <Route path="/NFT" element={<PageNFT />}/>
          <Route path="/Pinpoint" element={<PagePinpoint />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
);
