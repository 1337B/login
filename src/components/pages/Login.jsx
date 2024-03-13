import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '../../firebase-config'
import Button from '../UI/form/Button'
import InputField from '../UI/form/InputField'
import Form from '../UI/form/Form'
import RecoverPassword from '../pages/RecoverPassword'
import styles from '../../styles/pages/Login.module.scss'
import githubIcon from '../../assets/images/github-icon.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import wineIcon from '../../assets/images/wine.svg'
import Logo from '../UI/Logo'
import LinkText from '../UI/LinkText'

function Login() {
    const [recoveringPassword, setRecoveringPassword] = useState(false)
    const navigate = useNavigate()

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

    const toggleRecoverPassword = (event) => {
        event.preventDefault()
        setRecoveringPassword(!recoveringPassword)
        navigate(recoveringPassword ? '/login' : '/recoverPassword')
    }

    const handleRecovery = (method, input) => {
        console.log(`Recuperar por ${method}: ${input}`)
        setRecoveringPassword(false)
        navigate('/login')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <Logo src={wineIcon} alt="Nombre de la empresa" />
                {!recoveringPassword ? (
                    <>
                        <Form onSubmit={handleSubmit}>
                            <InputField
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                            <InputField
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                            />
                            <Button
                                type="submit"
                                className={styles.submitButton}
                            >
                                login
                            </Button>
                        </Form>
                        <div className="my-3 text-center">
                            <span className="text-gray-500">Or login with</span>
                        </div>
                        <div className="flex flex-col space-y-4 mb-5">
                            <Button
                                onClick={signInWithGoogle}
                                icon={googleIcon}
                                className={styles.authButton}
                            >
                                Google
                            </Button>
                            <Button
                                onClick={signInWithGithub}
                                icon={githubIcon}
                                className={styles.authButton}
                            >
                                GitHub
                            </Button>
                        </div>
                        <div className={styles.recoverBox}>
                        <LinkText
                            href="/recoverPassword"
                            text="Forgot your password?"
                            onClick={toggleRecoverPassword}
                        />
                        </div>    
                    </>
                ) : (
                    <RecoverPassword onRecover={handleRecovery} />
                )}
            </div>
            {!recoveringPassword && (
                <div className={styles.registerBox}>
                    <LinkText
                        href="/register"
                        text="Not a member? Sign up now"
                    />
                </div>
            )}
        </div>
    )
}

export default Login
