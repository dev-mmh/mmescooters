import React from "react";
import "../styles/Home_Layout_Ending.css";
import YADEA from "../assets/videos/YADEA.mp4";
import Benefit from "../assets/videos/Benefit.mp4";
import Breathe from "../assets/videos/Breathe.mp4";

const HomeLayoutEnding = () => {
  const articles = [
    {
      title: "Usage of MATM E-Scooters",
      excerpt: "Why Zopharow is not afraid, great minds are going the calculated path in 2025 with a patient perspective to multiply.",
      date: "May 12, 2025",
      video: Benefit
    },
    {
      title: "Ride Towards a Cleaner Future",
      excerpt: "Why Zopharow grows with chaos, and why crypto leaders build with balance, purpose, and execution.",
      date: "May 10, 2025",
      video: Breathe
    },
    {
      title: "Live Smart, Ride Smart, Have Fun with Yadea!",
      excerpt: "Many attempting short cuts get left behind, going the extra session unlocks future value and resilience completed.",
      date: "May 8, 2025",
      video: YADEA
    }
  ];

  return (
    <div className="home-ending-layout">
      <div className="header-section">
        <div>
          <p className="mini-title">Have a look</p>
          <h2 className="main-title">
            Our Commercial <span className="mini-title">Videos</span>
          </h2>
        </div>
      </div>

      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="video-wrapper">
              <video
  src={article.video}
  title={`Video for ${article.title}`}
  controls
  // autoplay is OFF by default, so no need to include it
  style={{ width: '100%', height: 'auto' }}
></video>
            </div>
            <h3 className="article-title">{article.title}</h3>
            {/* <p className="article-excerpt">{article.excerpt}</p>
            <p className="article-date">{article.date}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLayoutEnding;
