import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userName = (profile) => {
        return updateProfile(auth.currentUser, profile)

    }
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        login,
        registration,
        userName,
        varifyEmail,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;