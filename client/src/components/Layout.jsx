import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Modal from './Modal'
import { ModalContext } from '../contexts/ModalContext'
import { NotificationContext } from '../contexts/NotificationContext'
import Notification from './Notification'

const Layout = () => {
  const { modalIsVisible } = useContext(ModalContext);
  const { showNotification, messageType, setShowNotification, message } = useContext(NotificationContext);

  useEffect(() => {
    let timeoutId;
    if (showNotification) {
      timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 3000)
    }
    return () => clearTimeout(timeoutId);
  }, [showNotification, setShowNotification]);

  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
        { 
          modalIsVisible ? <Modal /> : null
        }
        {
          showNotification ? 
            <Notification 
              message={message}
              messageType={messageType}
            /> : null
        }
    </main>
  )
}

export default Layout