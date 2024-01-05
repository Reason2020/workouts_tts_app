import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Modal from './Modal'

const Layout = () => {
  const modalIsVisible = true;
  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
        { 
          modalIsVisible ? <Modal /> : null
        }
    </main>
  )
}

export default Layout