import React, { createContext } from 'react'
import { getAuth } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);
function AuthProvider({children}) {

const user ={displayName:"muri kha"}
  const authInfo ={
    user
  }
  return (
    <AuthContext.Provider value={authInfo}>
                {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider