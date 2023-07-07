import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebase"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword
} from "firebase/auth";

import { getDatabase, set, ref, update, get, onValue, remove } from "firebase/database";
import { database } from "./firebase";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth,email, password)
        
      }
      
      function login(email, password) {
        return signInWithEmailAndPassword(auth,email, password)
        
      }
    
      function logout() {
        return signOut(auth)
      }

      function getCurrentUser()
      {
         let user = auth.currentUser
         return user
      }

      function deleteItem(itemID) {
        const itemRef = ref(database,`users/${currentUser.uid}/items/${itemID}` );
        console.log("IemId",itemID);
        remove(itemRef);
      
      }

      function getSavedItems() {

      }

    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])
      
      const value = {
        currentUser,
        login,
        signup,
        logout,
        getCurrentUser,
        deleteItem,
      }
    
      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}