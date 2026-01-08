import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import MetaTags from './MetaTags.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import AboutMe from './AboutMe.jsx'
import Specials from './Specials.jsx'
import Reservations from './pages/Reservations.jsx'
import OrderOnline from './pages/OrderOnline.jsx'
import Login from './pages/Login.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <MetaTags />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
