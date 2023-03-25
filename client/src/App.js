import React from 'react'
import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import PublicRoute from './components/routes/PublicRoute';
//navbar
import Navbar from './components/navbar/Navbar';
//admin routes
import AdminSignin from './components/Admin/admin-signin/AdminSignin';
import AdminRegistration from './components/Admin/admin-registration/AdminRegistration'
//user routes
import UserSignin from './components/User/user-signin/UserSignin';
import UserRegistration from './components/User/user-registartion/UserRegistration';

function App() {
  const [auth, setAuth] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route element={<PublicRoute />}/>
          <Route path='/' element={<AdminSignin setAuth={setAuth}/>}/>
          <Route path='/admin-registration' element={<AdminRegistration />}/>
          <Route path='/user-signin' element={<UserSignin setAuth={setAuth}/>}/>
          <Route path='/user-registration' element={<UserRegistration />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
