// src/components/Register.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../../firebase-config';
import AuthButton from '../UI/form/AuthButton';  // Actualización de la importación

function Register() {
  let navigate = useNavigate();

  const registerWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      navigate('/home');
    }).catch((error) => {
      console.error(error);
    });
  };

  const registerWithGithub = () => {
    signInWithPopup(auth, githubProvider).then(() => {
      navigate('/home');
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Regístrate en tu cuenta</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="mt-6 flex flex-col gap-3">
            <AuthButton onClick={registerWithGoogle}>Registrarse con Google</AuthButton>
            <AuthButton onClick={registerWithGithub}>Registrarse con GitHub</AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
