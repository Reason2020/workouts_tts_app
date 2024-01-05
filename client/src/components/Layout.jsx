import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Modal from './Modal'
import { ModalContext } from '../contexts/ModalContext'

const Layout = () => {
  const { modalIsVisible } = useContext(ModalContext);

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