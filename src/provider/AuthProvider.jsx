import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
    const [photo,setPhoto]=useState(null);
    const [profileName,setProfileName]=useState(null);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInGoogle = ()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const signInGitHub =()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }
    const createUserEmailAndPassword =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInEmailAndPassword =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])


    const authInfo ={
        createUserEmailAndPassword,
        signInEmailAndPassword,
        logOut,
        user,
        signInGoogle,
        signInGitHub,
        loading,
        photo,
        setPhoto,
        profileName,
        setProfileName
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;