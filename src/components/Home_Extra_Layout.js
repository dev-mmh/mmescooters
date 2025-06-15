// HomeExtraLayout.js
import React from "react";
import "../styles/Home_Extra_Layout.css"; // Import the CSS file
import Warranty_1 from "../assets/images/warranty1.jpg";
import Warranty_2 from "../assets/images/warranty2.jpg";
import Warranty_mid from "../assets/images/warranty_mid.jpg";

const HomeExtraLayout = () => {
  return (
    <div className="extra-layout">
      <h2 className="extra-title">
        Warranty 
        {/* <span className="highlight">Little Zopharow</span> */}
      </h2>
      <div className="card-container">
        <div className="card">
        <div className="card-image-wrapper">
  <img src={Warranty_1} alt="Card Visual" className="card-full-image" />
</div>
</div>
        <div className="card active">
          <div className="card-image-wrapper">
  <img src={Warranty_mid} alt="Card Visual" className="card-full-image" />
</div>
</div>
        <div className="card">
         <div className="card-image-wrapper">
  <img src={Warranty_2} alt="Card Visual" className="card-full-image" />
</div></div>
      </div>
      {/* <div className="footer-note">
        <span className="note-highlight">Crypto Insight: </span>
        <span className="note-main">Achieve Results Not Illusion</span>
      </div> */}
    </div>
  );
};

export default HomeExtraLayout;
