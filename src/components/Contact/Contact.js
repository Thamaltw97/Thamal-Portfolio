import React, { useState } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { FaReact } from "react-icons/fa";
import { ImHourGlass } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
// import "./../Contact/ContactStyles.css";

// import "./ExperienceStyles.css";

const Contact = () => {

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><ImLocation color="#000" size="2.5rem" /></div>
              <div className="text">
                <h3>Address</h3>
                <p>41/1 A, Saddhasena Mawatha,<br/> Maha Ambalangoda,<br /> Ambalangoda.<br /> Sri Lanka.</p>
              </div>
            </div>
            <br />
            <div className="box">
            <div className="icon"><FaPhoneAlt color="#000" size="2.5rem" /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>+94-71-296-3564</p>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="icon"><MdEmail color="#000" size="2.5rem" /></div>
              <div className="text">
                <h3>Email</h3>
                <p>thamaltw97@outlook.com</p>
              </div>
            </div>
          </div>
          {/* <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required />
                <span>Type your message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div> */}
        </div>
      <SectionDivider divider />
    </Section>
  );
};

export default Contact;
