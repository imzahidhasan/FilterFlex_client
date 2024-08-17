import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Template() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
      </div>
    )
}

export default Template