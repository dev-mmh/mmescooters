import React, { useState } from "react";
import {
  Typography,
  Box,
  Dialog,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SparePartProducts from "../product_data/spare_parts_data.js";
import "../styles/product_card.css";

const scooterModels = [
  { brand: "Aima", model: "G009" },
  { brand: "Yadea", model: "T9" },
  { brand: "Yadea", model: "M6" },
];

const SparePartProductList = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const filteredProducts = SparePartProducts.filter((product) =>
    product.compatibleModels?.some(
      (model) => model.brand === selectedBrand && model.model === selectedModel
    )
  );

  const handleOpen = (product) => {
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <Box p={2}>
      {/* Brand/Model Filters */}
      <Box mb={3}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <FormControl fullWidth variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Brand</InputLabel>
              <Select
                value={selectedBrand}
                onChange={handleBrandChange}
                label="Brand"
              >
                {Array.from(
                  new Set(scooterModels.map((item) => item.brand))
                ).map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ minWidth: 150 }}
              disabled={!selectedBrand}
            >
              <InputLabel>Model</InputLabel>
              <Select
                value={selectedModel}
                onChange={handleModelChange}
                label="Model"
              >
                {scooterModels
                  .filter((item) => item.brand === selectedBrand)
                  .map((item) => (
                    <MenuItem key={item.model} value={item.model}>
                      {item.model}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Product List */}
      <Grid container spacing={2} justifyContent="center">
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // onClick={() => handleOpen(product)}
              style={{
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: "transparent",
                borderRadius: 8,
                padding: 8,
              }}
            >
              <Box
                sx={{
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
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

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  mt: 1,
                  color: "#444",
                }}
              >
                {product.name}
              </Typography>

              {product.compatibleModels?.map((modelData, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "#666",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {modelData.brand} - {modelData.model}
                </Typography>
              ))}

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  mt: 0.5,
                  color: "#00AC36",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                ₹ {product.price}
              </Typography>
            </motion.div>
          </Grid>
        ))}

        {filteredProducts.length === 0 && (
          <Typography variant="h6" color="text.secondary" mt={3}>
            No spare parts found for selected brand and model.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default SparePartProductList;
