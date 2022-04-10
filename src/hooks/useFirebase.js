import { useEffect, useState } from "react"

const useFirebase=()=>{
    const [user, setUser]=useState({})

     useEffect(()=>{

     },[])
    
     const signInWithGoogle=()=>{
         console.log('signin ok')
     }

     return [user, setUser];

}
export default useFirebase;