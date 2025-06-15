import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SliderImage_1 from "../assets/images/aima_tran-Photoroom.png";
import SliderImage_2 from "../assets/images/call_to_action-Photoroom.png";
import SliderImage_3 from "../assets/images/Aima_a700-Photoroom.png";
import "./HeroSlider.css";

const images = [SliderImage_1, SliderImage_2, SliderImage_3];
const GRID_SIZE = 8;

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const generateTiles = () => {
      const newTiles = [];
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          newTiles.push({ x, y });
        }
      }
      setTiles(newTiles);
    };
    generateTiles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-grid-slider">
      {tiles.map((tile, idx) => {
        const delay = (tile.x + tile.y) * 0.05;
        const tileSize = 100 / GRID_SIZE;

        return (
          <motion.div
            key={`${currentIndex}-${idx}`}
            className="grid-tile"
            style={{
              top: `${tile.y * tileSize}%`,
              left: `${tile.x * tileSize}%`,
              width: `${tileSize}%`,
              height: `${tileSize}%`,
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
              backgroundPosition: `${(tile.x * -100) / (GRID_SIZE - 1)}% ${(tile.y * -100) / (GRID_SIZE - 1)}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0.6,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 90 - 45,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: delay,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroSlider;
