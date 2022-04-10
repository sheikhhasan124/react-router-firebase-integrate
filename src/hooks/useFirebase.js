import { useEffect, useState } from "react"
import app from "../firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFirebase=()=>{
    const [user, setUser]=useState({})

  
     const signInWithGoogle=()=>{
         signInWithPopup(auth,googleProvider)
         .then(result=>{
             const user = result.user;
             setUser(user)
             console.log(user)
         })
         .catch()
     }

    //  return [user, setUser];
       return {
           user, 
           signInWithGoogle
       }    

}
export default useFirebase;