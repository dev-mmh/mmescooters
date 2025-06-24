import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HeroText from '../components/Hero_text';
import Trophy from '../components/Trophy';
import AnimatedHeader from '../components/animated_header_text';
import AnimatedBody from '../components/animated_body_text';
import StatusLayout from '../components/Status_layout';
import HomeStarterLayout from '../components/Home_starter_layout';
import HomeExtraLayout from '../components/Home_Extra_Layout';
import HomeBodyLayout from '../components/Home_Body_Layout';
import HomeLayoutEnding from '../components/Home_Layout_Ending';

const Home = () => {
  return (
    <>
      <Header />
      {/* <AnimatedHeader /> */}


      <HeroText />

      <Testimonials />



      <HomeStarterLayout />
      <StatusLayout />

      <HomeBodyLayout />
      <Trophy />
      <HomeExtraLayout />

      <HomeLayoutEnding />
      <HeroSection />

      <Footer />
    </>
  );
};

export default Home;