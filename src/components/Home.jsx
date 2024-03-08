// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

function Home() {
  let navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Logeado!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;