// Home_Body_Layout.js
import React from "react";
import "../styles/Home_Body_Layout.css";
// import MATM_Logo from "../assets/images/logo_png.png";
import Yadea_Logo from "../assets/images/yadea.png";
import Aima_Logo from "../assets/images/aima.jpg";
import Rehinotek_Logo from "../assets/images/phinotek.jpg";

const HomeBodyLayout = () => {
  const cards = [
    // { image: MATM_Logo },
    { image: Yadea_Logo },
    { image: Aima_Logo },
    { image: Rehinotek_Logo }
  ];

  return (
    <div className="home-body-layout">
      <div className="headline">
        <h2 className="maintext">
          Offically Authourized Distribute
        </h2>
      </div>

      <div className="card-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`info-card ${index === 2 ? "active" : ""}`}
          >
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBodyLayout;
