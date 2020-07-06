import React from "react";
import "./footer.css";

const COLOR = [
  "footer--primary--solid",
  "footer--warning--solid",
  "footer--danger--solid",
  "footer--success--solid",
  "footer--primary--outline",
  "footer--warning--outline",
  "footer--danger--outline",
  "footer--success--outline"
];

const SIZES = ["footer--medium", "footer--small", "footer--large"];

export const Footer = ({
  year,
  children,
  footerColor,
  footerSize
}) => {
  const checkFooterColor = COLOR.includes(footerColor)
    ? footerColor
    : COLOR[0];

  const checkFooterSize = SIZES.includes(footerSize) ? footerSize : SIZES[0];
  return (
    <footer
      className={`footer ${checkFooterColor} ${checkFooterSize}`}
    >
      Copyright &copy; {children} {year}. All Rights Reserved.
    </footer>
  );
};

Footer.defaultProps = {
  children: "Company Name",
  year: "2020"
};

export default Footer;
