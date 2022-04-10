import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Orders from './components/orders/Orders';
import Register from './components/register/Resister';
import RequireAuth from './components/requireAuth/RequireAuth';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/orders' element={
                    <RequireAuth>
                        <Orders></Orders>
                    </RequireAuth>
                }></Route>
            </Routes>
        </div>
    );
};

export default App;