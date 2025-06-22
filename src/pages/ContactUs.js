import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroText from '../components/Hero_text';
import "../styles/contact_us.css";
import AnimatedHeader from '../components/animated_header_text';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_3u90b52'
const TEMPLATE_ID = 'template_6v92ykj'
const PUBLIC_KEY = "7feJ7YfN2R_EGT929"

const ContactUs = () => {
  const form = useRef();

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', phone: '' });
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div>
      <Header />
      <AnimatedHeader />

      <HeroText />

      <div className="contact-container">
        <div className="contact-header">
          <h2 className='hero-text sub_title_testimonials'>Contact Us</h2>
          <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className='statement-title' style={{ fontSize: "1.25rem" }}>Our Showroom</h3>
            <p><strong>Address:</strong> {t("company_address")}</p>
            <p><strong>Phone:</strong> +959 796265591</p>
            <p><strong>Email:</strong> arrthitmanescooter@gmail.com</p>
            <p><strong>Working Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
          </div>

          <div className="contact-form">
            <h3 className='hero-text sub_title_testimonials'>Send us a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number"
                placeholder="Your Phone (Optional)"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              >
              </textarea>
              <button type="submit" disabled={isSubmitting}>Send Message</button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div
                style={{
                  backgroundColor: '#d1fae5',
                  border: '1px solid #34d399',
                  color: '#047857',
                  padding: '12px 16px',
                  borderRadius: '0.25rem',
                  position: 'relative'
                }}
              >
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                style={{
                  backgroundColor: '#fee2e2',
                  border: '1px solid #f87171',
                  color: '#b91c1c',
                  padding: '12px 16px',
                  borderRadius: '0.25rem',
                  position: 'relative'
                }}
              >
                Failed to send message. Please try again.
              </div>
            )}
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