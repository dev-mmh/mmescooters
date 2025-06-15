import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const AnimatedBody = () => {
  return (
    <motion.div
      className="body-slogan-card"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Typography className="hero-text body-slogan-text">
        Ride Smarter , Save Future
      </Typography>
    </motion.div>
    
  );
};

export default AnimatedBody;
