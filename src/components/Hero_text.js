import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/hero_text.css"; // Import CSS file

const backgroundImages = [
  require("../assets/images/wp1.jpg"),
  // require("../assets/images/wp2.jpg"),
  require("../assets/images/wp3.jpg"),
  // require("../assets/images/wp4.jpg"),
  // require("../assets/images/wp5.jpg"),
  require("../assets/images/wallHome4.jpg"),
  require("../assets/images/wallHome5.jpg"),
  require("../assets/images/wallHome1.jpg"),

];

const HeroText = () => {
  const [bgIndex, setBgIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <section className="hero-container">
      {/* Background Image with Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          className="hero-background"
          style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
          initial={{ opacity: 0.7, }}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0.5, }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </AnimatePresence>

      {/* Text Content */}
      {/* <div className="hero-text-container">
        <motion.h1
          className="hero-text primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Ride Smarter, Save Future
        </motion.h1>
      </div> */}
    </section>
  );
};

export default HeroText;
