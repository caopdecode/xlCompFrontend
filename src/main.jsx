import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LandingPage } from './Components/LandingPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import './i18n'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
)
