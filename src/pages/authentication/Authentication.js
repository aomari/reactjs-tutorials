import React from 'react'
import './styles.css'
import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

function Authentication() {
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")

    const [user, setUser] = React.useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    const register = async () => {
        try {
            const _user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(_user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const _user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(_user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className='App'>
            <div>
                <h3>Register User</h3>
                <input placeholder='Email...' onChange={(event) => { setRegisterEmail(event.target.value) }} />
                <input placeholder='Password...' onChange={(event) => { setRegisterPassword(event.target.value) }} />

                <button onClick={register}>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input placeholder='Email...' onChange={(event) => { setLoginEmail(event.target.value) }} />
                <input placeholder='Password...' onChange={(event) => { setLoginPassword(event.target.value) }} />

                <button onClick={login}>Login</button>
            </div>

            <h4>User Logged In:</h4>
            {user?.email}
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

export default Authentication