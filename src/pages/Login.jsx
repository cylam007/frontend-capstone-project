// React library and hooks
import React, { useState } from 'react'

// React Router for navigation
import { Link } from 'react-router-dom'

// Components
import Button from '../components/Button.jsx'

// CSS styles
import styles from './Login.module.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [isSignUp, setIsSignUp] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
    setFormData({ email: '', password: '', rememberMe: false })
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <header className={styles.header}>
          <h1 className={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
          <p className={styles.subtitle}>
            {isSignUp 
              ? 'Join Little Lemon family and enjoy exclusive benefits' 
              : 'Sign in to your Little Lemon account'
            }
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your password"
              required
              minLength="6"
            />
          </div>

          {!isSignUp && (
            <div className={styles.formOptions}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>Remember me</span>
              </label>
              <a href="#" className={styles.forgotLink}>Forgot password?</a>
            </div>
          )}

          <div className={styles.buttonContainer}>
            <Button 
              word={isSignUp ? "Create Account" : "Sign In"} 
              w="100%" 
              h="50px"
              background_color="#f4ce14"
              font_color="#000"
              type="submit"
            />
          </div>
        </form>

        <footer className={styles.footer}>
          <p className={styles.toggleText}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              type="button" 
              className={styles.toggleButton}
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
          <p className={styles.homeLink}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Login