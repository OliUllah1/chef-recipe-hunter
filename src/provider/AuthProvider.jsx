import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const createUserEmailAndPassword =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInEmailAndPassword =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
    },[])
    const authInfo ={
        user,
        createUserEmailAndPassword,
        signInEmailAndPassword,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;