// React library
import React, { useReducer } from 'react'

// React Router for navigation
import { Routes, Route, useNavigate } from 'react-router-dom'

// CSS styles
import './App.css'

// Components
import MetaTags from './MetaTags.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import AboutMe from './AboutMe.jsx'
import Specials from './Specials.jsx'
import BookingPage from './pages/BookingPage.jsx'
import ConfirmedBooking from './pages/ConfirmedBooking.jsx'
import OrderOnline from './pages/OrderOnline.jsx'
import Login from './pages/Login.jsx'
import Footer from './Footer.jsx'

// Initialize the available times using the API for today's date
export const initializeTimes = () => {
  // Create a Date object for today
  const today = new Date()
  
  // window is a global object in browsers and provides access to browser APIs
  // Check if fetchAPI is available (from the external API script)
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(today)
  }
  
  // Fallback times if API is not available
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]
}

// Reducer function to update available times based on selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Use the API to fetch available times for the selected date
      if (action.payload && action.payload.date) {
        // Create a Date object from the selected date string
        const selectedDate = new Date(action.payload.date)
        
        // Check if fetchAPI is available (from the external API script)
        if (typeof window !== 'undefined' && window.fetchAPI) {
          return window.fetchAPI(selectedDate)
        }
      }
      
      // Fallback: return current state if API is not available
      return state
    default:
      return state
  }
}

function App() {
  // Use useReducer to manage availableTimes state
  // State value: availableTimes, Dispatch function: dispatch
  // Initial state is [] but will be set by initializeTimes function
  // updateTimes reducer will handle updates to availableTimes based on dispatched actions
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  
  // Get navigate function for programmatic navigation -> controller after user actions
  const navigate = useNavigate()
  
  // Submit form function that calls the API and navigates on success
  const submitForm = (formData) => {
    // Check if submitAPI is available (from the external API script)
    if (typeof window !== 'undefined' && window.submitAPI) {
      const isSuccess = window.submitAPI(formData)
      
      // If submission is successful, navigate to confirmation page
      if (isSuccess) {
        navigate('/confirmed')
        return true
      }
    }
    
    // Fallback: navigate to confirmation anyway (for development/testing)
    navigate('/confirmed')
    return true
  }

  return (
    <>
      <MetaTags />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/menu" element={<Specials />} />
          <Route 
            path="/reservations" 
            element={
              <BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch}
                submitForm={submitForm}
              />
            } 
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
