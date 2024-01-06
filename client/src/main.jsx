import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModalContextProvider from './contexts/ModalContext.jsx'
import NotificationContextProvider from './contexts/NotificationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalContextProvider>
      <NotificationContextProvider>
        <App />
      </NotificationContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
)
