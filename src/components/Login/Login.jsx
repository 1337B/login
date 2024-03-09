// src/components/Login.jsx

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '../../firebase-config'
import AuthButton from '../UI/form/AuthButton'
import styles from '../../styles/pages/Login/Login.module.scss'
import githubIcon from '../../assets/images/github-icon.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import wineIcon from '../../assets/images/wine.svg'

function Login() {
    let navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Formulario de login enviado')
        navigate('/home')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <div>
                <img src={wineIcon} alt="Nombre de la empresa" className={styles.logo} />
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            name="email"
                            type="email"
                            required
                            className={`${styles.inputField} w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            required
                            className={`${styles.inputField} w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <button type="submit" className={styles.submitButton}>
                            login
                        </button>
                    </div>
                </form>
                <div className="my-3 text-center">
                    <span className="text-gray-500">Or login with</span>
                </div>
                <div className="flex flex-col space-y-4 mb-5">
                    {' '}
                    {/* Añade espacio vertical entre botones */}
                    <AuthButton onClick={signInWithGoogle} icon={googleIcon}>
                        Google
                    </AuthButton>
                    <AuthButton onClick={signInWithGithub} icon={githubIcon}>
                        GitHub
                    </AuthButton>
                </div>
                <div className="text-center">
                    <a href="#" className="text-blue-500 hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>
            <div className={styles.registerBox}>
                {' '}
                {/* Componente separado para el registro */}
                <p className="text-center mt-4">
                    Not a member?{' '}
                    <a
                        href="/register"
                        className="text-blue-600 hover:underline"
                    >
                        Sign up now
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login
