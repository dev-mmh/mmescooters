import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroText from '../components/Hero_text';
import "../styles/contact_us.css";
import AnimatedHeader from '../components/animated_header_text';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
      const { t } = useTranslation();
  
  return (
    <div>                    <Header />
          <AnimatedHeader />

      <HeroText />

      <div className="contact-container">
        <div className="contact-header">
          <h2 className='hero-text sub_title_testimonials'>Contact Us</h2>
          <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className='statement-title'>Our Showroom</h3>
            <p><strong>Address:</strong> {t("company_address")}</p>
            <p><strong>Phone:</strong> +959 796265591</p>
            <p><strong>Email:</strong> arrthitmanescooter@gmail.com</p>
            <p><strong>Working Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
          </div>

          <div className="contact-form ">
            <h3 className='hero-text sub_title_testimonials'>Send us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone (Optional)" />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <h3 className='hero-text sub_title_testimonials'>Find Us on the Map</h3>
  <iframe
  width="600"
  height="450"
  // style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://maps.google.com/maps?q=21.9737826,96.0844901&z=17&output=embed">
</iframe>

      </div>

      </div>
      <Footer />

    </div>

  );
};


export default ContactUs;