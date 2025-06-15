import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../styles/company_background.css";
import Changang from "../assets/images/aima.jpg";
import MATMLogo from "../assets/images/logo_png.png";
import Rhinotek from "../assets/images/yadea.png";
import Logo from "../assets/images/logo_png.png";

import Yadea from "../assets/images/yadea.png";
import Aima from "../assets/images/aima.jpg";
import { useTranslation } from 'react-i18next';


const logos = [
    { name: "Yadea", src: Yadea },

  { name: "Changan Auto", src: Changang },
  { name: "MATM", src: MATMLogo },
  // { name: "Aima", src: Aima },
];

// const stats = [
//   { value: "500+", label: "Employees" },
//   { value: "Since ", label: "2019" },
//   { value: "7", label: "4S Showrooms" },
//   { value: "2", label: "Factories" },
// ];

const CompanyBackground = () => {
    const { t } = useTranslation();
  
  return (
    <Container className="company-background">
      {/* Description & Logo Grid in One Row */}
      <Box className="about-container">

      <Typography className="company-description">
          <Typography className="hero-text sub_title_testimonials_about_us">
                    {t("story_behind_caption")}
                  </Typography><br></br>
         <Typography className="hero-text paragraph">         {t("story_behind")}
         </Typography>
         </Typography>
        {/* Company Description */}
          {/* Hexagonal Logo Grid */}
        <Box className="hex-grid">
          {logos.map((logo, index) => (
            <Box key={index} className="hex">
              <img src={logo.src} alt={logo.name} className="hex-logo" />
            </Box>
          ))}
        </Box>
        

        
      </Box>

      {/* Key Stats (Below) */}
      <Box className="stats-container">
        {/* {stats.map((stat, index) => (
          <Box key={index} className="stat-item">
            <Typography className="stat-value hero-text description">{stat.value}</Typography>
            <Typography className="stat-label hero-text description">{stat.label}</Typography>
          </Box>
        ))} */}
      </Box>
    </Container>
  );
};

export default CompanyBackground;
