import React from "react";
import "./career.css";
import "../styles/hero_text.css"; // Import CSS
import CareerImage from "../assets/images/career.jpg"; // Update the path to your image

const Career = () => {
  return (
    <div className="career-container">
      {/* Left Section - Text Content */}
      <div className="career-text">
        <h2>Looking for Oppprtunities? Join Our Team!</h2>
        <p>We are seeking dedicated applicants who:</p>
        <ul>
          <li>✅ Are committed to long-term employment</li>
          <li>✅ Are willing to travel</li>
          <li>✅ Are interested in career growth opportunities</li>
        </ul>
        <p>If you meet all the above criteria, we encourage you to send us your resume!</p>
        <h3>Please include the following documents along with your application:</h3>
        <ul>
          <li>📌 Three recent passport-sized photos</li>
          <li>📌 A copy of your NRC (National Registration Card)</li>
          <li>📌 Family registration document</li>
          <li>📌 Labor card</li>
          <li>📌 Education certificates</li>
          <li>📌 Any other relevant documents</li>
        </ul>
      </div>

      {/* Right Section - Image */}
      <div className="career-image">
        <img src={CareerImage} alt="Career Opportunity" />
      </div>
    </div>
  );
};

export default Career;
