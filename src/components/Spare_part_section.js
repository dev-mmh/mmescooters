import React from 'react';
import ProductList from './FeaturedProduct';
import SparePartList from './Spare_part_products';
import { Box, Grid } from '@mui/material';
import '../styles/hero_text.css';
import { motion } from "framer-motion";


const SparePartSection = () => {
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
          You can find available Spare Parts what you want . 
        </motion.h2>
            <SparePartList></SparePartList>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default SparePartSection;