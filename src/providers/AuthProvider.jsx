import {createContext, useEffect, useState } from "react"
export const userContext = createContext()
import app from "../firebase/firebase.config"
import {getAuth, GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = ()=> signInWithPopup(auth, googleProvider)
    const signInWithFacebook = ()=> signInWithPopup(auth, facebookProvider)
    const registerUser = (email, password)=>createUserWithEmailAndPassword(auth, email, password);
    const loginWithEmailAndPwd = (email, password)=>signInWithEmailAndPassword(auth, email, password)
    const signOutUser = ()=>signOut(auth)
    const userInfo = {
        user,
        setUser,
        loading,
        signInWithGoogle,
        signInWithFacebook,
        registerUser,
        loginWithEmailAndPwd,
        signOutUser
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>unsubscribe();
    }, [user])

  return (
    <userContext.Provider value={userInfo}>
       {children}
    </userContext.Provider>
  )
}

export default AuthProvider