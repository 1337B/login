// src/components/Register.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '../../firebase-config'
import Button from '../UI/form/Button'
import BackButton from '../UI/BackButton'
import Logo from '../UI/Logo'
import wineIcon from '../../assets/images/wine.svg'
import githubIcon from '../../assets/images/github-icon.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import styles from '../../styles/pages/Login.module.scss'

function Register() {
    let navigate = useNavigate()

    const registerWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const registerWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const goBack = () => {
        navigate('/login')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <Logo src={wineIcon} alt="Nombre de la empresa" />
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register now!
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="mt-6 flex flex-col gap-3">
                        <Button
                            onClick={registerWithGoogle}
                            icon={googleIcon}
                            className={styles.authButton}
                        >
                            Register with Google
                        </Button>
                        <Button
                            onClick={registerWithGithub}
                            icon={githubIcon}
                            className={styles.authButton}
                        >
                            Register with GitHub
                        </Button>
                    </div>
                </form>
                <BackButton onClick={goBack} className={styles.submitButton}>
                    Go back
                </BackButton>
            </div>
        </div>
    )
}

export default Register
