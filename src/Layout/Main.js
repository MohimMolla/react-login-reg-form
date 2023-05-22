import React from 'react'
import Login from '../Components/Login/Login'
import Registration from '../Components/Registration/Registration'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
