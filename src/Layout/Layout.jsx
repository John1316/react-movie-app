import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({userData , setUserData}) {
  let navigation = useNavigate()
  function logOut(){
    localStorage.removeItem('token')
    setUserData(null);
    navigation('/login');
  }
  return (
    <>
    <Navbar logOut={logOut} userData={userData}/>
    <div className="container py-3">
    <div className="content">

    <Outlet></Outlet>
    </div>
    </div>
    <Footer/>
    </>
  )
}
