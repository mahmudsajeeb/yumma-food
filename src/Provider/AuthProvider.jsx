import React, { createContext, useEffect, useState } from 'react'
import {GithubAuthProvider ,onAuthStateChanged,GoogleAuthProvider,signOut,  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();;
import app from '../firebase.config';
export const AuthContext = createContext({})

const auth = getAuth(app);
function AuthProvider({children}) {


    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


const createUser =(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
// google provider
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider)
}
// github provider 
const githubLogin = () => {
  return signInWithPopup(auth, githubProvider)
}
const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () => {
  return signOut(auth)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
    setUser(loggedUser)
    setLoading(false)
  })
  return () =>{
    unsubscribe()
  }
},[])

// const provider = new GoogleAuthProvider()
  const authInfo ={
    user,
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
                {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider