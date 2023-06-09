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


import BookingDetails from "./pages/BookingDetails";
import CarBooking from "./pages/CarBooking";
import DateSelect from "./pages/DateSelect";
import MyBooking from './pages/Mybooking';
import AdminHome from './components/Admin/admin-home/AdminHome';
import AdminAddCar from './components/Admin/admin-add-car/AdminAddCar';
import AdminEditCar from './components/Admin/admin-edit-car/AdminEditCar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route element={<PublicRoute />}/>
          <Route path='/' element={<AdminSignin />}/>
          <Route path='/admin-registration' element={<AdminRegistration />}/>
          <Route path='/user-signin' element={<UserSignin />}/>
          <Route path='/user-registration' element={<UserRegistration />}/>
          <Route path="/dateselect" element={<DateSelect />} />
          <Route path="/carbooking" element={<CarBooking />}/>
          <Route path="/bookingdetails" element={<BookingDetails />} />
          <Route path="/mybookings" element={<MyBooking />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-home/addCar" element={<AdminAddCar />} />
          <Route path="/admin-home/editCar" element={<AdminEditCar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
