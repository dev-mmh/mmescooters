import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const AnimatedHeader = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="header-tail-card"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    >
      <Typography className="hero-text header-tail-text">
        {/* {t("title")} */}
      </Typography>
    </motion.div>
    
  );
};

export default AnimatedHeader;
