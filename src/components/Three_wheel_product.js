import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import ProductDetail from "../pages/Product_detail";
import products from "../product_data/product_data";
import { useNavigate } from "react-router-dom";
import "../styles/product_card.css";

const ThreeWheelProductsList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (product) => {
    navigate(`/product-detail/${product.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const ThreeWheelProducts = products?.filter(
    (p) => p.product_brand === "YADEA"
  );

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ padding: 2 }}
      >
        <Grid container spacing={1}>
          {ThreeWheelProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Box
                onClick={() => handleOpen(product)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  backgroundColor: "transparent", // no background
                  padding: 1,
                }}
              >
                <Box
                  sx={{
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: 2,
                    padding: 1,
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      color: "#444",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {selectedProduct && (
          <ProductDetail product={selectedProduct} onClose={handleClose} />
        )}
      </Dialog>
    </>
  );
};

export default ThreeWheelProductsList;
