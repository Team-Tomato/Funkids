import React from "react";
import "./button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline"
];

const SIZES = ["btn--medium", "btn--small", "btn--large"];

export const Button = ({
  children,
  elementID,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  function MouseOver(event) {
    const btnClass=event.target.classList;
    if (btnClass[1]==='btn--primary--solid') {
      event.target.style.background="darkblue";
    };
    if (btnClass[1]==='btn--warning--solid') {
      event.target.style.background="orange";
      event.target.style.color="#fff"


    };
    if (btnClass[1]==='btn--danger--solid') {
      event.target.style.background="#960019";
    };
    if (btnClass[1]==='btn--success--solid') {
      event.target.style.background="darkgreen";
      event.target.style.color="#fff"


    };
  }

  function MouseOut(event){
    event.target.style.background="";
    event.target.style.color="#111"

  }

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      id={elementID}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  elementID: "btn",
  children: "Button"
};

export default Button;
