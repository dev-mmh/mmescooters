import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import ProductDetail from "../pages/Product_detail";
import products from "../product_data/product_data";
import { useNavigate } from "react-router-dom";
import "../styles/product_card.css";

const ProductList = () => {
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

  const popularProducts = products?.filter((p) => p.sold >= 100);

  return (
    <>
      <Box
        component={motion.div}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 2,
          p: 2,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {popularProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                boxShadow: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleOpen(product);
              }}
            >
              <Box
                sx={{
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: 2,
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <CardContent sx={{ p: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    color: "#333",
                    fontSize: "0.95rem",
                    textAlign: "center",
                  }}
                  className="hero-text"
                >
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {selectedProduct && (
          <ProductDetail product={selectedProduct} onClose={handleClose} />
        )}
      </Dialog>
    </>
  );
};

export default ProductList;
