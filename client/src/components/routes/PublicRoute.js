import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
//import ErrorPage from './ErrorPage'

function PublicRoute() {
  const token = localStorage.getItem('token');
  const admin = localStorage.getItem('adminName');
  return (
    <>
      {
        !token ? <Outlet/> :
        admin? <Navigate to={'/admin'}/> : <Navigate to={'/user'}/>

      }
    </>
  )
}

export default PublicRoute