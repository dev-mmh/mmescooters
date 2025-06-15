import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroText from "../components/Hero_text";
import AnimatedHeader from "../components/animated_header_text";
import "../styles/blogs_and_news.css";
import CareerImage from "../assets/images/wallpaper1.jpg";
import NewsImage1 from "../assets/FuturedImages/eskooter4.jpg";
import NewsImage2 from "../assets/FuturedImages/eskooter3.jpg";
import NewsImage3 from "../assets/FuturedImages/eskooter1.jpg";
import { newsData } from "../news_data/news_data"
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HomeLayoutEnding from "../components/Home_Layout_Ending";
import { useTranslation } from "react-i18next";

const Blogs_and_News = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleOnclick = (id) => {
        navigate("/blog-and-news/" + id)
    }
    return (
        <div>
            <Header />
            <AnimatedHeader />
            {/* <div className="hero-section"> */}
            <HeroText />
            {/* </div> */}

            <div className="top-stories">
                {/* <div className="main-story">
                    <img src={CareerImage} alt="Fire" />
                    <div className="story-content">
                        <h2>Thousands flee hotels on Rhodes as fires spread</h2>
                        <p>Greece's deputy fire chief says the island's fires are the most difficult his service is now facing.</p>
                        <span className="category">EUROPE</span>
                    </div>
                </div> */}

                {/* <div className="side-stories">

                    
                    <div className="story">
                        <h4>Polarised Spain eyes the hard-right ahead of vote</h4>
                        <span className="category">EUROPE</span>
                        <img src={NewsImage1} alt="Fire" />

                    </div>
                    <div className="story">
                        <h4>Root strikes but Ashes hopes hang in the balance</h4>
                        <span className="category">CRICKET</span>
                        <img src={CareerImage} alt="Fire" />

                    </div>
                    </div> */}
            </div>

            <div className="news-section">
                <h4 className="blogs-title">Blogs and News<span className="mini-title">  Company Activities </span></h4>
                <div className="news-grid">
                    {newsData.map((v, k) => <div className="news-card" key={k} onClick={() => handleOnclick(v.id)}>
                        <img src={v.imageUrl[0]} alt="news-img-1" className="news-img" />
                        <div className="desc-text">
                            {v.desc}
                        </div>
                    </div>)}
                </div>
            </div>

            <div className="career-container">
                {/* Left Section - Text Content */}
                <div className="career-image">
                    <img src={CareerImage} alt="Career Opportunity" />
                </div>

                {/* Right Section - Image */}
                <div className="career-text">
                    <h2>{t("career_caption")}</h2>
                    <p>{t("career_title_011")}</p>
                    <ul>
                        <li> {t("career_paragraph_101")}</li>
                        <li>{t("career_paragraph_102")}</li>
                        <li>{t("career_paragraph_103")}</li>
                    </ul>
                    <p>{t("career_title_021")}</p>
                    <h3>{t("career_title_022")}</h3>
                    <ul>
                        <li>{t("career_paragraph_201")}</li>
                        <li>{t("career_paragraph_202")}</li>
                        <li>{t("career_paragraph_203")}</li>
                        <li>{t("career_paragraph_204")}</li>
                        <li>{t("career_paragraph_205")}</li>
                        <li>{t("career_paragraph_206")}</li>
                    </ul>
                </div>

            </div>

            <HomeLayoutEnding />

            <HeroSection />

            <Footer />
        </div>
    );
};

export default Blogs_and_News;
