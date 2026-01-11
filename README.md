# 🍋 Little Lemon Restaurant - React Web Application

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Key Concepts](#-key-concepts-demonstrated)
- [Testing](#-testing)
- [Accessibility](#-accessibility)
- [Documentation](#-documentation)
- [Future Enhancements](#-future-enhancements)

---

## ✨ Features

### User Features
- 🏠 **Home Page** with hero section, weekly specials, and customer testimonials
- 📅 **Table Reservation System** with real-time availability and comprehensive form validation
- 🛒 **Online Ordering** with shopping cart functionality
- 👤 **User Authentication** (login/signup interface)
- ✅ **Booking Confirmation** page with success feedback
- 📱 **Fully Responsive Design** - optimized for desktop, tablet, and mobile

### Technical Features
- ⚛️ **Modern React 19** with Hooks (useState, useReducer, useEffect)
- 🎨 **CSS Modules** for scoped, maintainable styling
- 🔍 **Advanced Form Validation** using Formik + Yup
- 🧪 **Comprehensive Testing** - 56 tests with Vitest and React Testing Library
- ♿ **Accessibility-First** with ARIA labels, semantic HTML5, and keyboard navigation
- 🚀 **Client-Side Routing** with React Router v7
- 📊 **Advanced State Management** with useReducer pattern
- 🔌 **External API Integration** for dynamic booking availability

---

## 🛠️ Tech Stack

### Core Framework
- **React 19.2.0** - UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **React Router DOM 7.12.0** - Declarative client-side routing

### Forms & Validation
- **Formik 2.4.9** - Advanced form state management
- **Yup 1.7.1** - Schema-based validation

### Testing Stack
- **Vitest 4.0.16** - Fast, modern testing framework
- **React Testing Library 16.3.1** - Component testing utilities
- **@testing-library/user-event 14.6.1** - Realistic user interaction simulation
- **@testing-library/jest-dom 6.9.1** - Custom matchers for better assertions
- **jsdom 27.4.0** - Browser environment simulation for tests

### Developer Tools
- **ESLint 9.39.1** - Code linting with React-specific rules
- **PropTypes 15.8.1** - Runtime type checking

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/frontend-capstone-project.git
   cd frontend-capstone-project
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   *Note: Use `--legacy-peer-deps` due to React 19 compatibility with some dependencies*

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Quick Start Commands

```bash
# Development
npm run dev          # Start dev server with HMR at localhost:5173

# Testing
npm test             # Run tests in watch mode
npm run test:run     # Run all tests once (CI mode)
npm run test:ui      # Open Vitest UI for visual test exploration

# Production
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint to check code quality
```

---

## 📁 Project Structure

```
frontend-capstone-project/
├── public/                          # Static assets served directly
├── src/
│   ├── assets/                      # Images, icons, media files
│   ├── components/                  # Reusable UI components
│   │   ├── BookingForm.jsx          # Reservation form with Formik
│   │   ├── BookingForm.module.css   # Booking form styles
│   │   ├── BookingForm.test.jsx     # 41 comprehensive tests
│   │   ├── Button.jsx               # Styled button component
│   │   └── Button.Component.css     # Button styles
│   ├── pages/                       # Page-level route components
│   │   ├── BookingPage.jsx          # Table reservation page
│   │   ├── BookingPage.module.css   # Booking page styles
│   │   ├── ConfirmedBooking.jsx     # Booking success page
│   │   ├── ConfirmedBooking.module.css  # Confirmation page styles
│   │   ├── ConfirmedBooking.test.jsx    # Confirmation tests (6 tests)
│   │   ├── OrderOnline.jsx          # Online ordering system
│   │   ├── OrderOnline.module.css   # Order page styles
│   │   ├── Login.jsx                # User authentication
│   │   └── Login.module.css         # Login page styles
│   ├── AboutMe.jsx                  # Hero/landing section
│   ├── AboutMe.module.css           # Hero section styles
│   ├── Specials.jsx                 # Weekly specials showcase (centered cards)
│   ├── Specials.module.css          # Specials section styles
│   ├── Testimonials.jsx             # Customer testimonials
│   ├── Testimonials.module.css      # Testimonials section styles
│   ├── Chicago.jsx                  # About section
│   ├── Chicago.module.css           # About section styles
│   ├── Header.jsx                   # Site header with navigation
│   ├── Header.module.css            # Header styles
│   ├── Footer.jsx                   # Site footer
│   ├── Footer.module.css            # Footer styles
│   ├── Nav.jsx                      # Navigation component
│   ├── Nav.module.css               # Navigation styles
│   ├── MetaTags.jsx                 # SEO meta tags
│   ├── Body.jsx                     # Home page content wrapper
│   ├── App.jsx                      # Root application component
│   ├── App.css                      # Global app styles
│   ├── App.test.jsx                 # App reducer logic tests (9 tests)
│   ├── main.jsx                     # Application entry point
│   ├── index.css                    # Global base styles
│   └── setupTests.js                # Test environment configuration
├── .gitignore
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite and Vitest configuration
└── README.md                        # This file - project overview
```

---

## 📜 Available Scripts

### Development

#### `npm run dev`
Starts the Vite development server with Hot Module Replacement (HMR).
- Opens at `http://localhost:5173`
- Auto-reloads on file changes
- Shows build errors and warnings in browser overlay
- Fast refresh for React components

### Testing

#### `npm test`
Runs Vitest in watch mode.
- Re-runs tests automatically on file changes
- Shows test results in terminal
- Interactive: press `a` to run all, `f` for failed only, `q` to quit

#### `npm run test:run`
Runs all tests once and exits.
- Perfect for CI/CD pipelines
- Reports test failures with exit code
- Faster than watch mode

#### `npm run test:ui`
Opens Vitest UI in browser for visual test exploration.
- See test hierarchy
- View test execution time
- Inspect test results visually
- Great for debugging failing tests

### Production

#### `npm run build`
Creates optimized production build in `dist/` folder.
- Minifies JavaScript and CSS
- Optimizes images and assets
- Tree-shaking to remove unused code
- Generates source maps for debugging

#### `npm run preview`
Serves the production build locally for testing.
- Simulates production environment
- Test before deployment
- Verify build artifacts

### Code Quality

#### `npm run lint`
Runs ESLint on all source files.
- Checks code style and quality
- Identifies potential bugs
- Enforces React best practices

---

## 🎓 Key Concepts Demonstrated

### 1. **Component Architecture**
- **Functional Components** with React Hooks
- **Smart vs. Presentational** components separation
- **Component Composition** for reusability
- **CSS Modules** for scoped styling

### 2. **Advanced State Management**

#### Local State (useState)
Simple, component-specific state:
```jsx
const [cartItems, setCartItems] = useState([])
```

#### Lifted State (useReducer)
Shared state managed in parent component:
```jsx
const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
```

#### Form State (Formik)
Complex form validation and state:
```jsx
<Formik
  initialValues={{ name: '', phone: '', date: '' }}
  validationSchema={BookingSchema}
  onSubmit={handleSubmit}
>
```

### 3. **Form Handling & Validation**

**Formik + Yup Integration** for robust validation:

- **Real-time validation** as user types
- **Schema-based rules** with Yup
- **Error messages** displayed inline
- **Submit button** disabled until valid
- **Accessible error** announcements

**Validation Rules**:
- Name: 2-50 characters required
- Phone: 10+ digits with optional formatting
- Date: Must be today or future date
- Guests: Between 1-10 people
- Time & Occasion: Required selections

### 4. **Client-Side Routing**

React Router v7 implementation:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home (Body) | Landing page with hero, specials |
| `/reservations` | BookingPage | Table reservation form |
| `/confirmed` | ConfirmedBooking | Booking success message |
| `/order-online` | OrderOnline | Online ordering system |
| `/login` | Login | User authentication |
| `/about` | AboutMe | About restaurant |
| `/menu` | Menu | Restaurant menu |

### 5. **External API Integration**

Dynamic booking system using external API:

```javascript
// Initialize available times
const initializeTimes = () => {
  const today = new Date()
  return window.fetchAPI(today) || fallbackTimes
}

// Update times based on selected date
const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return window.fetchAPI(new Date(action.payload.date))
  }
  return state
}

// Submit booking
const success = window.submitAPI(formData)
```

### 6. **Comprehensive Testing**

**Test-Driven Development** approach:

- **56 tests** covering critical functionality
- **3 test suites**: App, BookingForm, ConfirmedBooking
- **100% pass rate** for all tests
- **Multiple test types**: Unit, Integration, Accessibility

**Testing Coverage**:
- ✅ Reducer functions with API mocking
- ✅ Form validation (valid & invalid states)
- ✅ HTML5 validation attributes
- ✅ User interactions and submissions
- ✅ Component rendering and navigation
- ✅ ARIA accessibility attributes

**📖 See [TESTING-STRATEGY.md](TESTING-STRATEGY.md) for comprehensive testing guide**

### 7. **Accessibility (A11Y)**

**WCAG 2.1 Level AA** compliance features:

- ✅ **Semantic HTML5**: header, nav, main, section, article, footer
- ✅ **ARIA Labels**: All interactive elements properly labeled
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Form Accessibility**: Labels linked to inputs via htmlFor/id
- ✅ **Screen Reader**: Descriptive text and announcements
- ✅ **Focus Management**: Visible focus indicators
- ✅ **Color Contrast**: WCAG AA compliant colors

**📖 See [ACCESSIBILITY-IMPROVEMENTS.md](ACCESSIBILITY-IMPROVEMENTS.md) for details**

---

## 🧪 Testing

### Test Statistics

**✅ Total Tests**: 56
**📄 Test Files**: 3
**✔️ Success Rate**: 100%
**⚡ Avg Runtime**: ~7 seconds

### Test Breakdown

#### **App.test.jsx** (9 tests)
Tests reducer functions and state initialization:
- ✅ `initializeTimes()` with API integration
- ✅ `initializeTimes()` with fallback
- ✅ `updateTimes()` reducer with different actions
- ✅ API call verification with mocks
- ✅ Edge cases (null dates, missing API)

#### **BookingForm.test.jsx** (41 tests)
Comprehensive form testing:

**HTML5 Validation Attributes** (13 tests)
- ✅ Input type attributes (text, tel, date, number)
- ✅ Min/max constraints
- ✅ ARIA required attributes

**Valid Input States** (9 tests)
- ✅ Accepts valid names, phones, dates, guests
- ✅ Enables submit button when form valid
- ✅ No error messages for valid data

**Invalid Input States** (14 tests)
- ✅ Shows errors for too short/long names
- ✅ Validates phone number format
- ✅ Enforces guest count limits (1-10)
- ✅ Disables submit button with errors
- ✅ Sets aria-invalid on error fields

**Integration Tests** (5 tests)
- ✅ Form submission with valid data
- ✅ Date change dispatches UPDATE_TIMES
- ✅ Label and option rendering
- ✅ Initial disabled state

#### **ConfirmedBooking.test.jsx** (6 tests)
- ✅ Renders confirmation heading
- ✅ Displays thank you message
- ✅ Shows confirmation details
- ✅ Renders navigation links
- ✅ Displays success icon

### Running Tests

```bash
# Watch mode - best for development
npm test

# Single run - for CI/CD
npm run test:run

# Visual UI - for exploration
npm run test:ui
```

### Test Philosophy

Following **Testing Library** principles:
> "The more your tests resemble the way your software is used, the more confidence they can give you."

**Our approach**:
1. ✅ Test user behavior, not implementation
2. ✅ Use semantic queries (role, label, text)
3. ✅ Simulate real user interactions
4. ✅ Keep tests maintainable and readable

**📖 For testing best practices, see [TESTING-STRATEGY.md](TESTING-STRATEGY.md)**

---

## ♿ Accessibility

This project prioritizes **inclusive design** for all users.

### Semantic HTML5
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions: `<header>`, `<nav>`, `<main>`, `<footer>`
- Meaningful sections: `<article>`, `<section>`, `<aside>`
- Forms with `<fieldset>` and `<legend>` where appropriate

### ARIA Attributes
- **aria-label**: Descriptive labels on buttons and links
- **aria-required**: Marks required form fields
- **aria-invalid**: Indicates validation errors
- **aria-labelledby**: Connects sections to headings
- **aria-describedby**: Links error messages to inputs

### Form Accessibility
```jsx
// Proper label association
<label htmlFor="customer-name">Full Name *</label>
<input
  id="customer-name"
  name="name"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby="name-error"
/>
{hasError && <span id="name-error">Name is required</span>}
```

### Keyboard Navigation
- ✅ All interactive elements accessible via Tab key
- ✅ Logical tab order
- ✅ Visible focus indicators
- ✅ Enter/Space for button activation
- ✅ Escape to close modals (when implemented)

### Screen Reader Support
- ✅ Descriptive alt text on all images
- ✅ Form errors announced on validation
- ✅ Page title updates on navigation
- ✅ Landmark regions for easy navigation

### Color & Contrast
- ✅ WCAG AA compliant color contrast ratios
- ✅ Information not conveyed by color alone
- ✅ Focus indicators visible in all states

---

## 🌐 Browser Support

Tested and verified on:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 120+ | ✅ Fully Supported |
| Edge | 120+ | ✅ Fully Supported |
| Firefox | 121+ | ✅ Fully Supported |
| Safari | 17+ | ✅ Fully Supported |
| iOS Safari | 17+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Development Process
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards
- ✅ Follow existing code style and naming conventions
- ✅ Write tests for new features (aim for >80% coverage)
- ✅ Update documentation for significant changes
- ✅ Ensure all tests pass: `npm run test:run`
- ✅ Run linting: `npm run lint`
- ✅ Add meaningful commit messages

### Pull Request Guidelines
- Provide clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure CI checks pass
- Request review from maintainers

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 About This Project

**Meta Front-End Developer Capstone Project**

Built as the culminating project for the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) program on Coursera.

### Learning Outcomes Demonstrated
✅ Modern React development with Hooks
✅ Advanced state management patterns
✅ Form validation and error handling
✅ Client-side routing with React Router
✅ Comprehensive component testing
✅ Web accessibility (WCAG 2.1)
✅ Responsive web design
✅ Git version control
✅ Professional documentation

---

## 🙏 Acknowledgments

- **Meta** - For the comprehensive curriculum and project requirements
- **React Team** - For the excellent framework and documentation
- **Vite Team** - For the blazing-fast development experience
- **Testing Library** - For promoting good testing practices
- **Open Source Community** - For the amazing tools and libraries

---

## 📞 Support & Contact

### Questions or Issues?
- 📧 **Email**: chungyeunglam@gmail.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/cylam-007/frontend-capstone-project/issues)
- 📖 **Documentation**: See docs folder in this repository
- 💬 **Discussions**: [GitHub Discussions](https://github.com/cylam-007/frontend-capstone-project/discussions)

### Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Testing Library](https://testing-library.com/)