import { useParams } from "react-router-dom";
import products from "../product_data/product_data";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroText from "../components/Hero_text.js";
import AnimatedHeader from "../components/animated_header_text.js";
import "../styles/product_details.css";
import { motion } from "framer-motion";
import HomeExtraLayout from "../components/Home_Extra_Layout.js";
import React, { useState, useRef, useEffect } from "react";
import TwoWheelSection from "../components/Two_wheel_section.js";
import ThreeWheelSection from "../components/Three_wheel_section.js";
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid2 } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";

const viberNumber = "+959442274599";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(undefined);

  const [openDialog, setOpenDialog] = useState(false);
  const imageRef = useRef(null);

  const [product1, setProduct1] = useState(undefined);
  const [product2, setProduct2] = useState(undefined);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.imageUrl);
    }
  }, [product]);

  const handleThumbnailClick = (e, img) => {
    e.preventDefault();
    setSelectedImage(img);
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const onOpenDialog = () => {
    setOpenDialog(true);
    setProduct1(product);
    setProduct2(undefined);
  }

  const onCloseDialog = () => {
    setOpenDialog(false);
    setProduct1(undefined);
    setProduct2(undefined);
  }

  const smartViberRedirect = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const cleanNumber = viberNumber.replace(/[^\d+]/g, ''); // Clean the number

    if (isMobile) {
      // Try to open Viber app first
      const viberAppUrl = `viber://chat?number=${cleanNumber}`;
      window.location.href = viberAppUrl;

      // Fallback: Try alternative formats if first doesn't work
      setTimeout(() => {
        // Try Viber's deep link format
        const alternativeUrl = `viber://contact?number=${cleanNumber}`;
        window.location.href = alternativeUrl;
      }, 500);

      // Final fallback: redirect to Viber download page
      setTimeout(() => {
        console.log("Redirecting to Viber download page...");
        window.open('https://www.viber.com/download/', '_blank');
      }, 2000);
    } else {
      // Desktop - redirect to Viber download page since web chat is limited
      window.open('https://www.viber.com/download/', '_blank');
    }
  };

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <Header />
      <AnimatedHeader />
      <HeroText />
      <div className="product-detail-container">
        <div className="product-detail">
          <div className="product-images">
            <motion.img
              ref={imageRef}
              src={selectedImage}
              alt={product.name}
              className="main-image"
            // animate={{ y: [0, -10, 0] }}
            // transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="thumbnail-container">
              {(product.images || [product.imageUrl]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                  onClick={(e) => handleThumbnailClick(e, img)}
                  style={{
                    border: selectedImage === img ? "2px solid #000" : "1px solid #ccc",
                    cursor: "pointer"
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
              <Button
                variant="text"
                onClick={onOpenDialog}
                style={{ color: '#000', textDecoration: 'underline', textTransform: "capitalize" }}
              >
                Compare with other products
              </Button>

              <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={openDialog}
                onClose={onCloseDialog}
              >
                <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>Compare Products</DialogTitle>
                <DialogContent>
                  <Grid2 container spacing={2} padding={2}>
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      <ProductSelect
                        product={product1}
                        onSelect={setProduct1}
                        exclueIds={[product2?.id]}
                      />
                      {
                        product1 && <>
                          <motion.img
                            ref={imageRef}
                            src={product1.imageUrl}
                            alt={product1.name}
                            className="main-image"
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                          <ProductInfo product={product1} />
                        </>
                      }
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      <ProductSelect
                        product={product2}
                        onSelect={setProduct2}
                        exclueIds={[product1?.id]}
                      />
                      {
                        product2 && <>
                          <motion.img
                            ref={imageRef}
                            src={product2.imageUrl}
                            alt={product2.name}
                            className="main-image"
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                          <ProductInfo product={product2} />
                        </>
                      }
                    </Grid2>
                  </Grid2>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Box>
            <ProductInfo product={product} />
            <div className="add-to-cart">
              <button className="cart-btn" onClick={smartViberRedirect}>
                <span className="cart-btn">
                  Click here to Order Product
                </span>
              </button>
            </div>
          </Box>
        </div>
        <HomeExtraLayout />
      </div>
      <Footer />
    </div >
  );
};

export default ProductDetail;

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p className="product-description">Battery Capacity: {product.battery_capacity}</p>
      <p className="product-description">Battery Type: {product.battery_type}</p>
      <p className="product-description">Motor Power: {product.motor_power}</p>
      <p className="product-description">Battery Capacity: {product.battery_capacity}</p>
      <p className="product-description">Motor Type: {product.motor_type}</p>
      <p className="product-description">Brake: {product.brake}</p>
      <p className="product-description">Range: {product.range}</p>
      <p className="product-description">Speed: {product.speed}</p>
      <p className="product-description">Dimension: {product.dimension}</p>
      <p className="product-description">Product Type : {product.product_type}</p>
      <div className="color-selection">
        <p>Available Colors :</p>
        <div className="color-options">
          {product.colors && product.colors.map((color, index) => (
            <span key={index} className={`color-box ${color.toLowerCase()}`}></span>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProductSelect = ({ product, onSelect, exclueIds = [] }) => {
  return (
    <DropdownButton
      variant={"outline-dark"}
      title={"Change Product"}
      size="sm"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {
        products
          .filter(p => !exclueIds.includes(p.id))
          .map((p) => (
            <Dropdown.Item
              key={p.id}
              eventKey={p.id}
              onClick={() => onSelect(p)}
              active={p.id === product?.id}
            >
              {p.name}
            </Dropdown.Item>
          ))
      }
    </DropdownButton>
  )
}