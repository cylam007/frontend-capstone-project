import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

// Mock the CSS module
vi.mock('./BookingForm.module.css', () => ({
  default: {
    bookingForm: 'bookingForm',
    label: 'label',
    input: 'input',
    select: 'select',
    submitButton: 'submitButton',
    error: 'error',
    errorMessage: 'errorMessage',
    formError: 'formError',
  }
}));

// Mock the Button component
vi.mock('./Button.jsx', () => ({
  default: ({ children, ...props }) => <button {...props}>{children}</button>
}));

describe('BookingForm Component', () => {
  // Mock props for BookingForm
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ========================================
  // STEP 1: HTML5 Validation Attributes Tests
  // ========================================
  
  describe('HTML5 Validation Attributes', () => {
    it('Name input has correct type attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveAttribute('type', 'text');
    });

    it('Name input has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveAttribute('aria-required', 'true');
    });

    it('Phone input has correct type attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      expect(phoneInput).toHaveAttribute('type', 'tel');
    });

    it('Phone input has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      expect(phoneInput).toHaveAttribute('aria-required', 'true');
    });

    it('Date input has correct type attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    it('Date input has min attribute set to today or future', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      expect(dateInput).toHaveAttribute('min');
      
      const minDate = dateInput.getAttribute('min');
      const today = new Date().toISOString().split('T')[0];
      expect(minDate).toBe(today);
    });

    it('Date input has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      expect(dateInput).toHaveAttribute('aria-required', 'true');
    });

    it('Guests input has correct type attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    it('Guests input has min attribute set to 1', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      expect(guestsInput).toHaveAttribute('min', '1');
    });

    it('Guests input has max attribute set to 10', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    it('Guests input has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      expect(guestsInput).toHaveAttribute('aria-required', 'true');
    });

    it('Time select has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const timeSelect = screen.getByLabelText(/Reservation Time/i);
      expect(timeSelect).toHaveAttribute('aria-required', 'true');
    });

    it('Occasion select has correct aria-required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const occasionSelect = screen.getByLabelText(/Occasion/i);
      expect(occasionSelect).toHaveAttribute('aria-required', 'true');
    });
  });

  // ========================================
  // STEP 2: JavaScript Validation Tests - VALID States
  // ========================================
  
  describe('JavaScript Validation - Valid States', () => {
    it('Accepts valid name with 2 characters', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.type(nameInput, 'Jo');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Name must be at least 2 characters/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts valid name with multiple words', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.type(nameInput, 'John Michael Doe');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Name must be at least 2 characters/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts valid phone number with 10 digits', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      await user.type(phoneInput, '1234567890');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Phone number must be at least 10 digits/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts valid phone number with formatting', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      await user.type(phoneInput, '(123) 456-7890');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Phone number must contain only/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts valid future date', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      await user.type(dateInput, '2026-12-31');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Date must be today or in the future/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts guests value of 1', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      // Default value is 1, so we just need to verify no error
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Must have at least 1 guest/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts guests value of 10', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '10');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Maximum 10 guests allowed/i)).not.toBeInTheDocument();
      });
    });

    it('Accepts guests value between 1 and 10', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '5');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.queryByText(/Must have at least 1 guest/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Maximum 10 guests allowed/i)).not.toBeInTheDocument();
      });
    });

    it('Enables submit button when all fields are valid', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      await user.type(screen.getByLabelText(/Full Name/i), 'John Doe');
      await user.type(screen.getByLabelText(/Phone Number/i), '1234567890');
      await user.type(screen.getByLabelText(/Reservation Date/i), '2026-12-25');
      await user.selectOptions(screen.getByLabelText(/Reservation Time/i), '18:00');
      
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /Make Reservation/i });
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  // ========================================
  // STEP 2: JavaScript Validation Tests - INVALID States
  // ========================================
  
  describe('JavaScript Validation - Invalid States', () => {
    it('Shows error for name with less than 2 characters', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.type(nameInput, 'A');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
      });
    });

    it('Shows error for name with more than 50 characters', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.type(nameInput, 'A'.repeat(51));
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Name must be less than 50 characters/i)).toBeInTheDocument();
      });
    });

    it('Shows error for empty name field', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.click(nameInput);
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
      });
    });

    it('Shows error for phone number with less than 10 characters', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      await user.type(phoneInput, '123456');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Phone number must be at least 10 digits/i)).toBeInTheDocument();
      });
    });

    it('Shows error for phone number with invalid characters', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      await user.type(phoneInput, 'abcd1234567890');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Phone number must contain only/i)).toBeInTheDocument();
      });
    });

    it('Shows error for empty phone field', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      await user.click(phoneInput);
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
      });
    });

    it('Shows error for empty date field', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      await user.click(dateInput);
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
      });
    });

    it('Shows error for guests less than 1', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '0');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Must have at least 1 guest/i)).toBeInTheDocument();
      });
    });

    it('Shows error for guests more than 10', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '15');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Maximum 10 guests allowed/i)).toBeInTheDocument();
      });
    });

    it('Shows error for negative guests value', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '-5');
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Must have at least 1 guest/i)).toBeInTheDocument();
      });
    });

    it('Shows error when time is not selected', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const timeSelect = screen.getByLabelText(/Reservation Time/i);
      await user.click(timeSelect);
      await user.tab();
      
      await waitFor(() => {
        expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
      });
    });

    it('Submit button remains disabled when form has errors', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      // Fill with invalid data
      await user.type(screen.getByLabelText(/Full Name/i), 'A');
      await user.type(screen.getByLabelText(/Phone Number/i), '123');
      
      const submitButton = screen.getByRole('button', { name: /Make Reservation/i });
      expect(submitButton).toBeDisabled();
    });

    it('Sets aria-invalid to true when field has error', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      await user.type(nameInput, 'A');
      await user.tab();
      
      await waitFor(() => {
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
      });
    });
  });

  // ========================================
  // Additional Integration Tests
  // ========================================
  
  describe('Form Integration', () => {
    it('Renders the "Choose date" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const labelElement = screen.getByText(/Choose date/i);
      expect(labelElement).toBeInTheDocument();
    });

    it('Renders the "Choose time" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const labelElement = screen.getByText(/Choose time/i);
      expect(labelElement).toBeInTheDocument();
    });

    it('Renders all available time options', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      mockAvailableTimes.forEach(time => {
        const timeOption = screen.getByRole('option', { name: time });
        expect(timeOption).toBeInTheDocument();
      });
    });

    it('Submit button is disabled initially', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const submitButton = screen.getByRole('button', { name: /Make Reservation/i });
      expect(submitButton).toBeDisabled();
    });

    it('Dispatches UPDATE_TIMES action when date changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText(/Reservation Date/i);
      await user.type(dateInput, '2026-12-25');
      
      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith({
          type: 'UPDATE_TIMES',
          payload: { date: '2026-12-25' }
        });
      });
    });

    it('Calls submitForm when form is submitted with valid data', async () => {
      const user = userEvent.setup();
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      await user.type(screen.getByLabelText(/Full Name/i), 'John Doe');
      await user.type(screen.getByLabelText(/Phone Number/i), '1234567890');
      await user.type(screen.getByLabelText(/Reservation Date/i), '2026-12-25');
      await user.selectOptions(screen.getByLabelText(/Reservation Time/i), '18:00');
      
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /Make Reservation/i });
        expect(submitButton).not.toBeDisabled();
      });
      
      await user.click(screen.getByRole('button', { name: /Make Reservation/i }));
      
      await waitFor(() => {
        expect(mockSubmitForm).toHaveBeenCalled();
      });
    });
  });
});

