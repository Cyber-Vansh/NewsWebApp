import React from "react";
import "./Footer.css";
import logo from "./../../assets/Screenshot_2025-04-10_at_11.55.54_PM-removebg-preview.png";

const Footer = ({ theme }) => {
  return (
    <div className={`Footer ${theme === "light" ? "light" : "dark"}`}>
      <img src={logo} className="footer-logo" />
      <p className="footer-text">Copyright © 2025 Flash Feed Pvt. Ltd.</p>
      <p className="footer-text">All rights reserved.</p>
      <div className="share-logos">
        <img
          src="https://images.freeimages.com/image/large-previews/9fe/x-twitter-light-grey-logo-5694251.png?h=350"
          width={"30px"}
        />
        <img
          src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook-new.png"
          width={"30px"}
        />
        <img
          src="https://pngcore.com/files/preview/901x583/117271575499ldpsm2hwtirlhlblpay91ptqz91akkfesgz5xujnqegpyzyutnb0jr9vrnt0gfhkfblo6pfyu5isot53qxb67mdhmyetfdshzqj.png"
          width={"40px"}
        />
        <img
          src="https://www.getfocused.no/wp-content/uploads/2022/09/White-YouTube-Logo-Transparent.png"
          width={"30px"}
        />
      </div>
    </div>
  );
};

export default Footer;
