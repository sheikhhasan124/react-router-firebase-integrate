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