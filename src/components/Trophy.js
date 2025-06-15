import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "../styles/trophy.css";
import "../styles/hero_text.css";
import TrophyBG from "../assets/images/trophy_bg.jpg"; // Left side background
import Certificate1 from "../assets/images/certi1.jpg";
import Certificate2 from "../assets/images/certi2.jpg";
import Yadea_certi_1 from "../assets/images/yadea_certi1.jpg";
import Yadea_certi_2 from "../assets/images/yadea_certi2.jpg";

const certificates = [
  { id: 1, img: Certificate1, award_name: "AIMA " , award_description:"Gold Winner 2024" },
  { id: 2, img: Certificate2, award_name: "AIMA" , award_description:"2024 Gold Winner"},
  { id: 3, img: Yadea_certi_1, award_name: "AIMA" , award_description:"Total Sales Volume of Electric Two-wheel Vehincle Exceeded 100 Million Units" },
  { id: 4, img: Yadea_certi_2, award_name: "YADEA" , award_description:"Global No.1 in sales volume for 5 consecutive years" },
  // { id: 5, img: Certificate2, award_name: "YADEA" },

];

const Trophy = () => {
  return (
    <div className="trophy-container text-center">
      {/* Title Section */}
      <h2 className="hero-text sub_title_testimonials"> Awards </h2>
      {/* <p className="hero-text secondary ">Our proud moments & Certificates</p> */}

      {/* Two-Side Layout (Left: BG Image | Right: Swiper) */}
      <div className="trophy-content">
       {/* Left Side - Background Image */}
       {/* <div className="trophy-left">
          <img src={TrophyBG} alt="Trophy Background" className="trophy-bg-image" />
        </div> */}
        {/* Right Side - Swiper (Certificates) */}
        <div className="trophy-right">
          <Swiper 
            effect="coverflow"
            grabCursor={true}
            // centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 400,
              // depth: 120,
              modifier: 1.5,
              slideShadows: false,
            }}
            // pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="swiper"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id} className="swiper-slide">
                <div className="trophy-card">
                  <img src={cert.img} alt={cert.title} className="swiper-image" />
                  {/* <p className="trophy-title">{cert.award_name}</p>  */}
                  {/* <p className="trophy-description">{cert.award_description}</p> */}
                </div>
                                  <p className="trophy-title"> {cert.award_description}</p>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         

      </div>
    </div>
  );
};

export default Trophy;
