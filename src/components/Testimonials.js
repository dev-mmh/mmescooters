import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/hero_text.css';
import { useTranslation } from 'react-i18next';

// Testimonial Data Array
const testimonials = [
  { id: 1, name: "Ko Thura", review: "Amazing Product, Highly Recommended." },
  { id: 2, name: "Ma Kyawt Kyawt", review: "Great experience with the e-scooter." },
  { id: 3, name: "Aung Myo", review: "The best electric scooter I have ever used!" },
  { id: 4, name: "Su Su", review: "Very comfortable and stylish ride." },
  { id: 5, name: "Hla Hla", review: "Affordable and great battery life!" },
  {id:6 , name : "Mya Mya " , review :"Good , I like it "},
  { id: 6, name: "Myo Min", review: "Smooth and fast performance." }
];

const Testimonials = () => {
    const { t } = useTranslation();
  
  return (
    <Box sx={{ padding: 4 }}>
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          className='hero-text sub_title_testimonials_T9'
          gutterBottom
        >
          YADEA T9 2024
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Left Side - Video Section with Animation */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0, border: "none" }}
                  src="https://www.youtube.com/embed/cLjUxJ8CFUs"
                  title="Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side - Scrollable Testimonials Section with Animation */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              className='hero-text sub_title_testimonials'
              gutterBottom
            >
              {t("testimonials_caption")}
              </Typography>

            {/* Scrollable Container */}
            <Box
              sx={{
                maxHeight: "300px",
                overflowY: "auto",
                paddingRight: 2,
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#8b8b8b",
                  borderRadius: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Card
                    className='hero-text review-card'
                    
                  >
                    <CardContent>
                      <Typography
                        className='hero-text sub_paragraph'
                      >
                        "{testimonial.review}"
                      </Typography>
                      <Typography className='hero-text reviewer' sx={{ marginTop: 1 }}>
                        {testimonial.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
