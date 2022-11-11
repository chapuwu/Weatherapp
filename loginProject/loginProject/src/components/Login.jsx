import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='login-container'>
            <div className='inputs-p'>
                <h1>Unifix</h1>
                <p>Username</p>
                <input type='text' />
                <p>Password</p>
                <input type='text' />
                <button>Sign in</button>
            </div>
        </div>
    )
}
