// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/Home';
import Register from './components/pages/Register';
import RecoverPassword from './components/pages/RecoverPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
      </Routes>
    </div>
  );
}

export default App;
