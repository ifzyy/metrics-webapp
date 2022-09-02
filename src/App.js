import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
