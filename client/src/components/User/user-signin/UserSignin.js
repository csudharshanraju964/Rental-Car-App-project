import React, { useContext, useState } from 'react'
import axios from '../../../helpers/axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './UserSignin.css'
import { CarContext } from '../../CarRentalProvider';

const userSigninURL = 'http://localhost:8000/user/signin'


function UserSignin() {
  const {setAuth}=useContext(CarContext)
  const navigate = useNavigate()

  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordErrMessage, setPasswordErrMessage] = useState('')

  //handle Password function
  const handleSigninPassword = (e) => {
    setPassword(e.target.value)
    setPasswordErrMessage('')
  }


  //styling when error in password
  const passwordErrorStyle = {
    border: (passwordErr === true) ? "1px solid red" : "1px solid #D1D1D1"
  }


  const onUserSignin = async () => {
    const userObj = { contact, password }
    try {
      toast.loading('Loading...')
      const response = await axios.post(userSigninURL, userObj)
      toast.dismiss()
      if (response.data.status) {
        //we have to store token in localStorage
        toast.success(response.data.message)
        localStorage.setItem('token', (response.data.token))
        localStorage.setItem('userName', (response.data.name))
        setAuth(response.data.name)
        navigate('/dateselect')
      }
      else {
        setPasswordErr('Incorrect Password')
        toast.error(response.data.message)
      }
    }
    catch (err) {
      //hide loader
      toast.dismiss()
      const {response} = err;
      console.log(err);
      if(Array.isArray(response.data.message)){
        toast.error(response.data.message[0].msg)
      }else{
        toast.error(response.data.message)
      }

    }

  }



  return (
    <div className='signinBody'>
      <div className='signinbody-left'>
        <h1>All you needed was a wheel in Your hand and four on the road.</h1>
      </div>
      <div className='signinbody-right'>
        <div className='signin-form-Wrapper'>
          <div className='form-navbar'>
            <div className='form-navbar-toggles'><h3 onClick={() => { navigate('/') }}>Admin</h3></div>
            <div className='form-navbar-toggles'><h3 style={{ color: '#4E94F4' }} onClick={() => { navigate('/user-signin') }}>User</h3></div>
          </div>
          <div className='signin-form'>
            <h3 className='form-header'>Sign in your Account</h3>
            <div className='form-input-fields'>
              <input type="email" placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
              <input type="password" placeholder='Password' value={password} onChange={handleSigninPassword} style={passwordErrorStyle} />
              {passwordErr && (<span className='signin-passwordError' style={{ color: 'red' }}>{passwordErrMessage}</span>)}
            </div>
            <div className='form-footer'>
              <p className='signin' onClick={() => { navigate('/user-registration') }}>Create new account</p>
              <button onClick={onUserSignin}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignin;