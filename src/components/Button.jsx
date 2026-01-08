
import React from "react";
import PropTypes from "prop-types";
import "./Button.Component.css";

const Button = ({ 
    w = "200px", h = "40px", 
    background_color = "#f4ce14", font_color = "#000000",
    word = "Click Me", 
    ...rest 
}) => {
  return (
    <button
      className="button"
      style={{
        width: w,
        height: h,
        backgroundColor: background_color,
        color: font_color,
        border: "none",
        borderRadius: "16px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 500,
        transition: "background 0.2s"
      }}
      {...rest}
    >
      {word}
    </button>
  );
};

Button.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
  word: PropTypes.string
};

export default Button;
