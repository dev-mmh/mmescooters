import React from "react";
import "../styles/company_statement.css"; // Import CSS
import "../styles/hero_text.css"; // Import CSS
import Mission from "../assets/images/mision.png";
import Vision from "../assets/images/vision.png";
import Goals from "../assets/images/goals.png";
import { useTranslation } from 'react-i18next';

const CompanyStatement = () => {
      const { t } = useTranslation();
  
  return (
    <div className="company-statement-container">
      <h2 className="hero-text sub_title_testimonials_company_statement" >
      {t("company_statement")}      </h2>
      <p className="hero-text paragraph_statement" style={{ paddingBottom
        : "80px" , }}>
        {t("company_statement_text")}
      </p>

      <div className="statement-grid">
        {/* Mission */}
        <div className="statement-card mission">
          <div className="card-top"></div>
          <img src={Mission} alt="Mission" className="image-circle" />
          <h3 className="statement-title">{t("company_mission_caption")}</h3>
          <p className="statement-text">
          {t("company_mission_paragraph")}</p>
        </div>

        {/* Vision */}
        <div className="statement-card vision">
          <div className="card-top"></div>
          <img src={Vision} alt="Vision" className="image-circle" />
          <h3 className="statement-title">{t("company_vision_caption")}</h3>
          <p className="statement-text"> {t("company_vision_paragraph")} </p>
        
        </div>

        {/* Values */}
        <div className="statement-card values">
          <div className="card-top"></div>
          <img src={Goals} alt="Values" className="image-circle" />
          <h3 className="statement-title">{t("company_goal_caption")}</h3>
          <p className="statement-text"> {t("company_goal_paragraph")}          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatement;
