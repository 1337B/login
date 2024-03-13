// src/components/RecoverPassword.jsx

import React, { useState } from 'react'
import InputField from '../UI/form/InputField'
import Button from '../UI/form/Button'
import styles from '../../styles/pages/Login.module.scss'
import recoveryStyles from '../../styles/pages/RecoverPassword.module.scss'
import Logo from '../UI/Logo'
import wineIcon from '../../assets/images/wine.svg'
import BackButton from '../UI/BackButton'
import { useNavigate } from 'react-router-dom'

const RecoverPassword = ({ onRecover }) => {
    const [method, setMethod] = useState('email') // Puede ser 'email' o 'phone'
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí llamarías a tu función onRecover pasando el método e input
        onRecover(method, input)
    }
    let navigate = useNavigate()

    const goBack = () => {
        navigate('/login')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <Logo src={wineIcon} alt="Nombre de la empresa" />
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Recover your password
                    </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={recoveryStyles.radioGroup}>
                        <label>
                            <input
                                className={recoveryStyles.radioCustom}
                                type="radio"
                                name="recovery-method"
                                checked={method === 'email'}
                                onChange={() => setMethod('email')}
                            />
                            Email
                        </label>
                        <label>
                            <input
                                className={recoveryStyles.radioCustom}
                                type="radio"
                                name="recovery-method"
                                checked={method === 'phone'}
                                onChange={() => setMethod('phone')}
                            />
                            Phone
                        </label>
                    </div>
                    <InputField
                        name="recovery-input"
                        type={method === 'email' ? 'email' : 'tel'}
                        required
                        placeholder={method === 'email' ? 'Email' : 'Phone'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit" 
                            className={`${styles.submitButton} ${recoveryStyles.recoverButton}`}>
                        Recover
                    </Button>
                </form>
                <BackButton onClick={goBack}>Go back</BackButton>
            </div>
        </div>
    )
}

export default RecoverPassword
