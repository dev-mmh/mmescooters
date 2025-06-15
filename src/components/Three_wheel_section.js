import React from 'react';
import ThreeWheelProductList from './Three_wheel_product';
import { Box, Grid } from '@mui/material';
import '../styles/hero_text.css';
import { motion } from "framer-motion";


const ThreeWheelSection = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      
        <Grid container spacing={2} sx={{ marginTop: 0 }}>
        <Grid item xs={12}>
        <motion.h2
          className="hero-text sub_title_testimonials"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          YADEA
        </motion.h2>

        </Grid>
        
      </Grid>
      <ThreeWheelProductList></ThreeWheelProductList>
    </Box>
  );
};

export default ThreeWheelSection;