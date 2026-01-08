import React, { useState } from 'react'
import Button from '../components/Button.jsx'
import styles from './OrderOnline.module.css'

function OrderOnline() {
  const [cartItems, setCartItems] = useState([])
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  })

  const menuItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, description: 'Fresh lettuce, tomatoes, olives, feta cheese' },
    { id: 2, name: 'Bruchetta', price: 5.99, description: 'Grilled bread with garlic and tomatoes' },
    { id: 3, name: 'Lemon Dessert', price: 5.00, description: 'Traditional Greek lemon cake' },
    { id: 4, name: 'Grilled Fish', price: 20.00, description: 'Fresh fish with Mediterranean herbs' },
    { id: 5, name: 'Pasta', price: 16.99, description: 'Homemade pasta with fresh ingredients' },
    { id: 6, name: 'Lamb Souvlaki', price: 18.99, description: 'Grilled lamb with vegetables and tzatziki' }
  ]

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCustomerChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', { customerInfo, cartItems, total: getTotalPrice() })
    // Handle order submission
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Order Online</h1>
        <p className={styles.subtitle}>Choose from our delicious menu and get it delivered to your door.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Menu</h2>
          <div className={styles.menuGrid}>
            {menuItems.map(item => (
              <div key={item.id} className={styles.menuItem}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
                <div className={styles.itemFooter}>
                  <span className={styles.itemPrice}>${item.price}</span>
                  <Button 
                    word="Add to Cart" 
                    w="120px" 
                    h="36px"
                    background_color="#f4ce14"
                    font_color="#000"
                    onClick={() => addToCart(item)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.orderSection}>
          <h2 className={styles.sectionTitle}>Your Order</h2>
          
          {cartItems.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty</p>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cartItems.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemInfo}>
                      <h4>{item.name}</h4>
                      <span>${item.price}</span>
                    </div>
                    <div className={styles.cartItemControls}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={styles.quantityBtn}
                      >
                        -
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.quantityBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.totalSection}>
                <h3 className={styles.total}>Total: ${getTotalPrice().toFixed(2)}</h3>
              </div>

              <form className={styles.customerForm} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Delivery Information</h3>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleCustomerChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleCustomerChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleCustomerChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleCustomerChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleCustomerChange}
                      className={styles.input}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Zip Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleCustomerChange}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <Button 
                    word="Place Order" 
                    w="200px" 
                    h="50px"
                    background_color="#f4ce14"
                    font_color="#000"
                    type="submit"
                  />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderOnline