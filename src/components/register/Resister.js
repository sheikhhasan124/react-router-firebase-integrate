import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>plese register</h3>
            <form>
                <input type="text" placeholder='name' />
                <br />
                <input type="email" placeholder='email'/>
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;