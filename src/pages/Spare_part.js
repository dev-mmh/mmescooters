import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Pagination, Button, Drawer } from "@mui/material";
import { motion } from "framer-motion";
// Import the modal component
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import product data
import products from "../product_data/product_data";
import HeroText from "../components/Hero_text";
import AnimatedHeader from "../components/animated_header_text";

// Import custom styles
import "../styles/product.css"; // Import the CSS file
import SparePartSection from  "../components/Spare_part_section.js";

const SparePartList = () => {
  const [category, setCategory] = useState("Two Wheel"); // Default category
  const [page, setPage] = useState(1);
  const [productsPerPage] = useState(9); // Number of products per page
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state for mobile

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => product.product_type === category);

  // Calculate the index for the current page
  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Header />
      
      <Box sx={{ textAlign: 'center' }}>
        {/* <Typography variant="h4">Product Categories</Typography> */}
                  <AnimatedHeader/>

        <HeroText />

                <SparePartSection/>
                

        

        {/* Mobile Drawer for Category Selection */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          
          <Drawer
            anchor="bottom"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              },
            }}
          >
            {["Three Wheel", "Two Wheel"].map((cat) => (
              <Button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  toggleDrawer(false);
                }}
                className="category-tab-color"
                variant={category === cat ? 'contained' : 'outlined'}
                sx={{ borderRadius: '25px', padding: '10px' }}
              >
                {cat}
              </Button>
            ))}
          </Drawer>
        </Box>
      </Box>
            
     

      <Footer />
    </>
  );
};

export default SparePartList;
