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
import HeroSection from "../components/HeroSection";
import HomeExtraLayout from "../components/Home_Extra_Layout";

// Import custom styles
import "../styles/product.css"; // Import the CSS file
import TwoWheelProduct from "../components/Two_wheel_section.js";
import ThreeWheelSection from "../components/Three_wheel_section.js";

const ProductList = () => {
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
        {/* <AnimatedHeader /> */}

        {/* <Typography variant="h4">Product Categories</Typography> */}
        <HeroText />

        <TwoWheelProduct />
        <ThreeWheelSection />
        <HeroSection />
        <HomeExtraLayout />


        {/* <Box className="category-tabs">
          {[ "Two Wheel","Three Wheel"].map((cat) => (
            <Button
              key={cat}
              className={`category-tab ${category === cat ? 'selected' : ''}`}
              onClick={() => setCategory(cat)}
              variant="outlined"
              size="large"
              sx={{
                color: 'black',
                borderRadius: '25px',
                padding: '10px 20px',
                fontWeight: 'normal',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </Button>
          ))}
        </Box> */}

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

      {/* Product List */}
      {/* <Box className="product-list">
        {currentProducts.map((product) => (
          <motion.div key={product.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Card className="product-card shadow">
              <CardMedia component="img" image={product.imageUrl} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box> */}

      {/* Pagination */}
      {/* <Box className="pagination-container">
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="white"
        />
      </Box> */}

      <Footer />
    </>
  );
};

export default ProductList;
