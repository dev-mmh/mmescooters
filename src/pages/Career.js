import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import "../styles/career.css"; // Import the CSS file
import Header from "../components/Header";
import CareerImage from "../assets/images/join_our_team.png";
import Footer from '../components/Footer';
import AnimatedHeader from "../components/animated_header_text";
import { useTranslation } from "react-i18next";
import HeroText from '../components/Hero_text';

const Career = () => {
  const { t } = useTranslation();
  return (
    <div>
                    <Header />
                                        <AnimatedHeader />

                    <HeroText title={t("career_title_001")} description={t("career_title_002")} />
                    <div className="career-container">
      {/* Left Section - Text Content */}
      <div className="career-image">
        <img src={CareerImage} alt="Career Opportunity" />
      </div>
      
      {/* Right Section - Image */}
      <div className="career-text">
        <h2>{t("career_caption")}</h2>
        <p>{t("career_title_011")}</p>
        <ul>
          <li> {t("career_paragraph_101")}</li>
          <li>{t("career_paragraph_102")}</li>
          <li>{t("career_paragraph_103")}</li>
        </ul>
        <p>{t("career_title_021")}</p>
        <h3>{t("career_title_022")}</h3>
        <ul>
          <li>{t("career_paragraph_201")}</li>
          <li>{t("career_paragraph_202")}</li>
          <li>{t("career_paragraph_203")}</li>
          <li>{t("career_paragraph_204")}</li>
          <li>{t("career_paragraph_205")}</li>
          <li>{t("career_paragraph_206")}</li>
        </ul>
      </div>

    </div>
    <Footer />

    </div>
    
  );
};

export default Career;
