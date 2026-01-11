// React library
import React from "react";

// PropTypes for type checking
import PropTypes from "prop-types";

// CSS styles
import "./Button.Component.css";

const Button = ({ 
    variant = "primary",
    size = "medium",
    children,
    word,
    disabled = false,
    type = "button",
    ariaLabel,
    className = "",
    ...rest 
}) => {
  // Support both 'word' (legacy) and 'children' props
  const buttonText = children || word || "Click Me";
  
  // Build class names
  const buttonClasses = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    className
  ].filter(Boolean).join(" ");
  
  return (
    <button
      type={type}
      className={buttonClasses}
      aria-label={ariaLabel || (typeof buttonText === 'string' ? buttonText : undefined)}
      disabled={disabled}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node,
  word: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
  className: PropTypes.string
};

export default Button;
