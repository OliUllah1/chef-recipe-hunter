import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [profile,setProfile]=useState('');
    const provider = new GoogleAuthProvider();
    const signInGoogle = ()=>{
       return signInWithPopup(auth,provider)
    }
    const createUserEmailAndPassword =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInEmailAndPassword =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    const profileUpdate =(name,profileUrl)=>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:profileUrl})
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
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
        profile,
        setProfile,
        profileUpdate,
        signInGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;