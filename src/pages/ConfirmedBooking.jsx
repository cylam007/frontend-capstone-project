// React library
import React from 'react'

// React Router for navigation
import { Link } from 'react-router-dom'

// CSS styles
import styles from './ConfirmedBooking.module.css'

function ConfirmedBooking() {
  return (
    <section className={styles.confirmationSection}>
      <div className={styles.container}>
        <div className={styles.successIcon}>
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h1 className={styles.title}>Booking Confirmed!</h1>
        
        <p className={styles.message}>
          Thank you for your reservation at Little Lemon Restaurant.
        </p>
        
        <p className={styles.details}>
          A confirmation email has been sent to your email address with all the details of your booking.
        </p>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton} aria-label="Return to Home">
            Return to Home
          </Link>
          <Link to="/reservations" className={styles.bookAgainButton} aria-label="Make Another Reservation">
            Make Another Reservation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ConfirmedBooking
