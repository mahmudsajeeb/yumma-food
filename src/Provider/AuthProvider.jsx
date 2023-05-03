import React, { createContext } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);
function AuthProvider({children}) {

const user =null;


const createUser =(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}
// const provider = new GoogleAuthProvider()
  const authInfo ={
    user,
    createUser,
    signIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
                {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider