import React, { useState } from 'react'
import Button from '../components/Button.jsx'
import styles from './Reservations.module.css'

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Birthday'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    // Handle form submission
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reserve a Table</h1>
        <p className={styles.subtitle}>Book your table at Little Lemon for an unforgettable dining experience.</p>
      </div>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time" className={styles.label}>Time *</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="guests" className={styles.label}>Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="occasion" className={styles.label}>Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
              <option value="Date">Date</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button 
            word="Make Reservation" 
            w="200px" 
            h="50px"
            background_color="#f4ce14"
            font_color="#000"
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default Reservations