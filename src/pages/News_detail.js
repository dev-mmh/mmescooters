import { useParams } from "react-router-dom";
import products from "../product_data/product_data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroText from "../components/Hero_text";
import AnimatedHeader from "../components/animated_header_text";
import "../styles/product_details.css";
import { motion } from "framer-motion";
import { newsData } from "../news_data/news_data";

const NewsDetail = () => {
    const { id } = useParams();
    const newsDetailData = newsData.find((p) => p.id === parseInt(id));
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    if (!newsDetailData) {
        return <h2>News Not Found</h2>;
    }

    return (
        <div><Header />
            {/* <HeroText /> */}
            {/* <AnimatedHeader /> */}
            <h2 className="text-header">" {newsDetailData.title} "</h2>
            <div className="news-detail-container">
                <div className="news-detail-card-image">
                    <img src={newsDetailData.imageUrl[0]} alt={newsDetailData.name} className="main-image" />
                </div>
                <p className="desc-detail">{newsDetailData.desc}</p>
            </div>
            <Footer />
        </div>
    );
};

export default NewsDetail;
