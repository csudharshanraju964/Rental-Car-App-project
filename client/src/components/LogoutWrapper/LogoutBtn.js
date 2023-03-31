import React from 'react';
import './logoutWrapper.css';
import { useNavigate } from 'react-router-dom';
import profileIcon from './profileIcon.png';
import logout from './logout.png';
import toast from 'react-hot-toast';

function LogoutBtn({setAuth,usertoken}) {

    const navigate = useNavigate()

    //handle logout function
    const handleLogout = () => {
        localStorage.removeItem('AdminName') || localStorage.removeItem('userName') || localStorage.removeItem('token')||localStorage.removeItem("admintoken")
        setAuth("");
        toast.success('You logged out successfully!!')
        navigate('/')
    }

    const auth = (localStorage.getItem('AdminName')) || (localStorage.getItem('userName'))
    const profileName = auth ? (auth.toUpperCase()) : auth
    //console.log(auth)


    return (
        <div className='logout-profile-wrapper' >
            <div className='profile-wrapper'>
                <h2 className='nameTitle'>{profileName}</h2>
                <img src={profileIcon} alt='profileIcon' className='profileIcon' />
            </div>
            {usertoken && <button id ="my-booking" onClick={()=>{navigate("/mybookings")}}>My Bookings</button>}
            <img src={logout} alt='logoutIcom' onClick={handleLogout} className='logoutBtn' />
        </div>
    )
}

export default LogoutBtn