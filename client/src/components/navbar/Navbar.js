import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import LogoutBtn from '../LogoutWrapper/LogoutBtn'
import { CarContext } from '../CarRentalProvider'

function Navbar() {
    const {auth, setAuth}=useContext(CarContext)
    //console.log(auth)
    useEffect(()=>{
        const name = (localStorage.getItem('adminName')) || (localStorage.getItem('userName'))
        setAuth(name);
        // eslint-disable-next-line 
    },[])
    
    //profile and logout on navbar accessible only after login
    const backgroundColor = (!auth)?'transparent':'white'

    return (
        <div className='Navbar' style={{backgroundColor}}>
            <h2 className='logo'>LOGO</h2>
            {auth && <div ><LogoutBtn setAuth={setAuth} /></div>}
        </div>
    )
}

export default Navbar