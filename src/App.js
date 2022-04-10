import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
};

export default App;