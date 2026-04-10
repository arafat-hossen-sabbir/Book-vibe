import React from 'react'
import Navbar from '../componants/Navbar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Mainlayout