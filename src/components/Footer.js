import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Grid, Link, TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import Facebook from '../assets/social_media_image/facebook.png';
import Instagram from '../assets/social_media_image/instagram.png';
import WhatsApp from '../assets/social_media_image/whats_up.png';
import TikTok from '../assets/social_media_image/tik_tok.png';


const Footer = () => {
    const { t } = useTranslation();

  return (
    <Box sx={{
      color: '#fff', padding: 4, fontSize: '14px', background: '#ffffff ', position: 'relative', borderTop:"2px solid orange",
      zIndex: -1,
    }}>
      {/* Top Section - Contact Info */}
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
          <LocationOn sx={{ color: '#00AC36', mr: 1 }} />
          <Box>
            <Typography className='hero-text footer_title'>{t("footer_find_us")}</Typography>
            <Typography className='hero-text footer_sub_title'>{t("company_address")}</Typography><br></br>
                        <Typography className='hero-text footer_sub_title'>{t("company_address2")}</Typography>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
          <Phone sx={{ color: '#00AC36', mr: 1 }} />
          <Box>
            <Typography className='hero-text footer_title'>{t("footer_call_us")}</Typography>
            <Typography className='hero-text footer_sub_title'>+959 796265591 (MDY)</Typography><br></br><br></br>
                        <Typography className='hero-text footer_sub_title'>+959 259694591 (YGN)</Typography>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
          <Email sx={{ color: '#00AC36', mr: 1 }} />
          <Box>
            <Typography className='hero-text footer_title'>{t("footer_mail_us")}</Typography>
            <Typography className='hero-text footer_sub_title'>arrthitmanescooter@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box sx={{ borderBottom: '0.5px solid orange', my: 3 }}></Box>

      {/* Main Footer Content */}
      <Grid container spacing={3} justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} sm={4}>
          {/* <Typography className='hero-text popular'>Company</Typography>
          <Typography className='hero-text review-name'           >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </Typography> */}
          <Box sx={{ mt: 2 }}>
            <Typography className='hero-text footer_title' sx={{ mb: 2 }}>{t("footer_follow_us")}</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1, ml: 2 }}>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <img className='hero-image-footer' src={Facebook} alt="Facebook" />
              </Link>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <img className='hero-image-footer' src={WhatsApp} alt="Twitter" width="24" height="24" />
              </Link>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <img className='hero-image-footer' src={TikTok} alt="Instagram" width="24" height="24" />
              </Link>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <img className='hero-image-footer' src={Instagram} alt="Instagram" width="24" height="24" />
              </Link>

            </Box>
          </Box>
        </Grid>


        {/* Subscribe Section */}
        <Grid item xs={24} sm={8}>
          {/* <Typography className='hero-text footer_title'>Subscribe</Typography> */}
          <Typography className='hero-text footer_sub_title' sx={{ mt: 1, mb: 2 }}>
            {t("footer_subscribe_text")}
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap', // Ensures links wrap instead of overflowing
            justifyContent: { xs: 'center', md: 'flex-start' }, // Center on mobile, right-align on desktop
          }} className="hero-text sub_title_testimonials">
                    {t("title")}
            {/* <Link href="#" color="inherit">Home</Link>
          <Link href="#" color="inherit">Terms</Link>
          <Link href="#" color="inherit">Privacy</Link>
          <Link href="#" color="inherit">Policy</Link>
          <Link href="#" color="inherit">Contact</Link> */}
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, borderTop: '0.5px solid orange', pt: 2 }}>
        <Typography className='hero-text sub_paragraph'>{t("footer_copy_right")}</Typography>
        <Box sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap', // Ensures links wrap instead of overflowing
          justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, right-align on desktop
        }} className="hero-text review-name">

          <Typography className='hero-text sub_paragraph'>{t("footer_developer")} </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default Footer;