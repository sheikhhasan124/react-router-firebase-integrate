## route firebase integration  
- 1- install react-router  
- 2- create firebase project 
- 3- install firebase  
- 4-

## search and see usehook.com to understand more  
## search and see react firebase hook ,then go to github then read  

# auth by form  
- log in - already user 
- resister  first time then resister    
- sign in - already user  
- sign up first time then resister 

## manually creating custom hooks for auth  but we do not use this ,,instaide we use react firebase hook  
- hooks> useFirebase.js
```
import { useEffect, useState } from "react"
import app from "../firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

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
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
    }

     useEffect(()=>{
        onAuthStateChanged(auth, user=>{
          setUser(user)  
        })
     },[])

    //  return [user, setUser];
       return {
           user, 
           signInWithGoogle,
           handleSignOut
       }    

}
export default useFirebase;
```
- components>login>Login.js  
```
import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}= useFirebase()
    return (
        <div>
            <h2>from login</h2>
            <div style={{margin:'20px'}}>
                    <button onClick={signInWithGoogle}>google signin</button>
            </div>
            <form>
               <input type="email" placeholder='email'/>
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
```
- components> header>Header.js  
```
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handleSignOut}=useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Order</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?  <button onClick={handleSignOut}>sign out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
