import React from 'react'
import BookingForm from '../components/BookingForm.jsx'
import styles from './BookingPage.module.css'

function BookingPage() {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Reserve a Table</h1>
          <p className={styles.subtitle}>Book your table at Little Lemon for an unforgettable dining experience.</p>
        </div>
        <BookingForm />
      </div>
    </section>
  )
}

export default BookingPage
