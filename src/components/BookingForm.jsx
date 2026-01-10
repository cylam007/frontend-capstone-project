import React, { useState } from 'react'
import Button from './Button.jsx'
import styles from './BookingForm.module.css'

function BookingForm() {
  // State for each form field
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')
  
  // State for available booking times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name,
      phone,
      date,
      time,
      guests,
      occasion
    }
    console.log('Reservation submitted:', formData)
    // Handle form submission
  }

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>Full Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />

      <label htmlFor="phone" className={styles.label}>Phone Number *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={styles.input}
        placeholder="(123) 456-7890"
        required
      />

      <label htmlFor="res-date" className={styles.label}>Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
        required
      />

      <label htmlFor="res-time" className={styles.label}>Choose time</label>
      <select
        id="res-time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.select}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests" className={styles.label}>Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className={styles.input}
        placeholder="1"
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion" className={styles.label}>Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className={styles.select}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" className={styles.submitButton} />
    </form>
  )
}

export default BookingForm
