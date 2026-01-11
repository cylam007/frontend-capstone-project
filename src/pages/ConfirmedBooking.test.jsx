import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

describe('ConfirmedBooking Component', () => {
  it('Renders the confirmation heading', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Booking Confirmed!");
    expect(headingElement).toBeInTheDocument();
  });

  it('Renders the thank you message', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const messageElement = screen.getByText(/Thank you for your reservation/i);
    expect(messageElement).toBeInTheDocument();
  });

  it('Renders the confirmation details message', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const detailsElement = screen.getByText(/confirmation email has been sent/i);
    expect(detailsElement).toBeInTheDocument();
  });

  it('Renders the "Return to Home" link', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const homeLink = screen.getByText("Return to Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('Renders the "Make Another Reservation" link', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const bookAgainLink = screen.getByText("Make Another Reservation");
    expect(bookAgainLink).toBeInTheDocument();
    expect(bookAgainLink).toHaveAttribute('href', '/reservations');
  });

  it('Renders the success icon SVG', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });
});
