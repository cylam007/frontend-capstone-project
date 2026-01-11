// React library
import React from 'react'

// Components
import BookingForm from '../components/BookingForm.jsx'

// CSS styles
import styles from './BookingPage.module.css'

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Reserve a Table</h1>
          <p className={styles.subtitle}>Book your table at Little Lemon for an unforgettable dining experience.</p>
        </div>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  )
}

export default BookingPage
