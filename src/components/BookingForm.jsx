// React library
import React from 'react'

// Formik for form management and validation
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Yup for schema validation
import * as Yup from 'yup'

// Components
import Button from './Button.jsx'

// CSS styles
import styles from './BookingForm.module.css'

// Validation schema using Yup
const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Full name is required'),
  
  phone: Yup.string()
    .matches(
      /^[\d\s\-\(\)]+$/,
      'Phone number must contain only numbers, spaces, hyphens, and parentheses'
    )
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  
  date: Yup.date()
    .min(new Date(new Date().setHours(0, 0, 0, 0)), 'Date must be today or in the future')
    .required('Date is required'),
  
  time: Yup.string()
    .required('Please select a time'),
  
  guests: Yup.number()
    .min(1, 'Must have at least 1 guest')
    .max(10, 'Maximum 10 guests allowed')
    .required('Number of guests is required'),
  
  occasion: Yup.string()
    .required('Please select an occasion')
})

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Initial form values
  const initialValues = {
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  }

  // Handle form submission
  const handleFormSubmit = (values, { setSubmitting }) => {
    // Call the submitForm function passed from parent
    if (submitForm) {
      submitForm(values)
    } else {
      console.log('Reservation submitted:', values)
    }
    setSubmitting(false)
  }

  // Handle date change to update available times
  const handleDateChange = (e, setFieldValue) => {
    const selectedDate = e.target.value
    setFieldValue('date', selectedDate)
    
    // Dispatch action to update available times based on selected date
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } })
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookingSchema}
      onSubmit={handleFormSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ errors, touched, isValid, dirty, setFieldValue, values }) => (
        <Form className={styles.bookingForm}>
          {/* Full Name Field */}
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <Field
            type="text"
            id="name"
            name="name"
            className={`${styles.input} ${errors.name && touched.name ? styles.error : ''}`}
            placeholder="John Doe"
            aria-label="Full Name"
            aria-required="true"
            aria-invalid={errors.name && touched.name ? 'true' : 'false'}
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
          />
          <ErrorMessage name="name">
            {msg => <div id="name-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Phone Number Field */}
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <Field
            type="tel"
            id="phone"
            name="phone"
            className={`${styles.input} ${errors.phone && touched.phone ? styles.error : ''}`}
            placeholder="(123) 456-7890"
            aria-label="Phone Number"
            aria-required="true"
            aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
            aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
          />
          <ErrorMessage name="phone">
            {msg => <div id="phone-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Date Field */}
          <label htmlFor="res-date" className={styles.label}>Choose date *</label>
          <Field
            type="date"
            id="res-date"
            name="date"
            className={`${styles.input} ${errors.date && touched.date ? styles.error : ''}`}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => handleDateChange(e, setFieldValue)}
            aria-label="Reservation Date"
            aria-required="true"
            aria-invalid={errors.date && touched.date ? 'true' : 'false'}
            aria-describedby={errors.date && touched.date ? 'date-error' : undefined}
          />
          <ErrorMessage name="date">
            {msg => <div id="date-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Time Field */}
          <label htmlFor="res-time" className={styles.label}>Choose time *</label>
          <Field
            as="select"
            id="res-time"
            name="time"
            className={`${styles.select} ${errors.time && touched.time ? styles.error : ''}`}
            aria-label="Reservation Time"
            aria-required="true"
            aria-invalid={errors.time && touched.time ? 'true' : 'false'}
            aria-describedby={errors.time && touched.time ? 'time-error' : undefined}
          >
            <option value="">Select time</option>
            {availableTimes && availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time">
            {msg => <div id="time-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Number of Guests Field */}
          <label htmlFor="guests" className={styles.label}>Number of guests *</label>
          <Field
            type="number"
            id="guests"
            name="guests"
            className={`${styles.input} ${errors.guests && touched.guests ? styles.error : ''}`}
            min="1"
            max="10"
            aria-label="Number of Guests"
            aria-required="true"
            aria-invalid={errors.guests && touched.guests ? 'true' : 'false'}
            aria-describedby={errors.guests && touched.guests ? 'guests-error' : undefined}
          />
          <ErrorMessage name="guests">
            {msg => <div id="guests-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Occasion Field */}
          <label htmlFor="occasion" className={styles.label}>Occasion *</label>
          <Field
            as="select"
            id="occasion"
            name="occasion"
            className={`${styles.select} ${errors.occasion && touched.occasion ? styles.error : ''}`}
            aria-label="Occasion"
            aria-required="true"
            aria-invalid={errors.occasion && touched.occasion ? 'true' : 'false'}
            aria-describedby={errors.occasion && touched.occasion ? 'occasion-error' : undefined}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </Field>
          <ErrorMessage name="occasion">
            {msg => <div id="occasion-error" className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          {/* Submit Button - Disabled when form is invalid or not dirty */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isValid || !dirty}
            aria-label="Make Reservation"
          >
            Make Your reservation
          </button>
          
          {/* Form validation status message */}
          {!isValid && dirty && (
            <div className={styles.formError} role="alert">
              Please fix the errors above before submitting.
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default BookingForm
