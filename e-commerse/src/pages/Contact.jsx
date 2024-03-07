import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaEarthAfrica,
  FaLocationDot,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="left">
          <div className="section-input">
            <h3>Your Name</h3>
            <input type="text" name="username" placeholder="Enter Your Name" />
          </div>
          <div className="section-input">
            <h3>Your Email</h3>
            <input type="email" name="email" placeholder="Enter Your Email" />
          </div>
          <div className="section-input">
            <h3>Subject</h3>
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="section-input last">
            <h3>Message</h3>
            <input type="text" name="message" placeholder="Message" />
          </div>
          <button>SEND MESSAGE</button>
        </div>
        <div className="right">
          <h3>Contact Us</h3>
          <h2>Get in touch</h2>
          <h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            praesentium maxime sit cupiditate. In sequi temporibus blanditiis
            maxime eligendi tempore aspernatur, recusandae deserunt. Deleniti,
            voluptates! Debitis nesciunt possimus iure beatae.
          </h5>
          <div className="contact-info">
            <div className="section">
              <div className="sec-left">
                <IoCall />
              </div>
              <div className="sec-right">
                <h5>Call Us</h5>
                <h6>+91 0456547542</h6>
              </div>
            </div>
            <div className="section">
              <div className="sec-left">
                <MdOutlineMail />
              </div>
              <div className="sec-right">
                <h5>Email Us</h5>
                <h6>hello@timepass.com</h6>
              </div>
            </div>
            <div className="section">
              <div className="sec-left">
                <FaEarthAfrica />
              </div>
              <div className="sec-right">
                <h5>WebSite</h5>
                <h6>www.TimepassWeb123.com</h6>
              </div>
            </div>
            <div className="section">
              <div className="sec-left">
                <FaLocationDot />
              </div>
              <div className="sec-right">
                <h5>Adress</h5>
                <h6>99 Roving, st, Big City</h6>
              </div>
            </div>
          </div>
          <h4>Follow Us On</h4>
          <div className="social-logo">
            <FaFacebook className="logo" />
            <AiFillInstagram className="logo" />
            <FaSquareXTwitter className="logo" />
            <FaYoutube className="logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .parent {
    display: flex;
    min-height: 75%;
    margin: 2rem 5rem;
  }
  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .section-input {
    width: 100%;
    padding: 1rem 3rem;
    margin-bottom: 2rem;
  }
  .section-input h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0rem;
  }
  .section-input input {
    width: 100%;
    border-radius: 10px;
  }
  .last input {
    height: 10rem;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 1rem;
  }
  button {
    background-color: #2e3d45;
    padding: 1rem 3rem;
    border-radius: 10px;
    color: #fff;
    outline: none;
    border: none;
  }
  button:hover {
    background-color: #50776d;
  }
  .right {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10rem;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2e3d45;
  }
  h2 {
    font-size: 5rem;
    margin-bottom: 3rem;
    color: #50776d;
  }
  h5 {
    font-size: 1.5rem;
    width: 80%;
    color: #222;
    margin-bottom: 2rem;
  }
  .social-logo {
    display: flex;
    gap: 2rem;
  }
  .logo {
    color: #fff;
    background-color: #2e3d45;
    padding: 10px;
    font-size: 4rem;
    border-radius: 50%;
    transition: 0.2s all ease-in;
  }
  .logo:hover {
    background-color: #50776d;
  }
  .contact-info {
    margin-bottom: 2rem;
  }
  .section {
    display: flex;
    padding: 1rem;
  }
  .sec-left {
    display: flex;
    padding: 1rem;
    font-size: 2rem;
  }
  .sec-right {
    display: flex;
    flex-direction: column;
  }
  .sec-right h5 {
    font-size: 1.5rem;
    margin: 5px 0px;
  }
  .sec-right h6 {
    font-size: 1rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1400px) {
    width: 1200px;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .parent {
      flex-direction: column;
      min-height: 100vh;
      padding: 2rem 0rem;
    }
    .left {
      width: 100vw;
      flex-direction: column;
    }
    button {
      padding: 2rem 4rem;
    }
    .right {
      width: 100vw;
      display: flex;
      flex-direction: column;
      padding-left: 3rem;
    }
    h3 {
      font-size: 3rem;
      margin: 3rem 0rem;
    }
    h2 {
      font-size: 5rem;
      margin-bottom: 3rem;
      color: #50776d;
    }
    h5 {
      font-size: 1.5rem;
      width: 90%;
    }
    .social-logo {
      gap: 2rem;
    }
    .logo {
      padding: 10px;
      font-size: 5rem;
    }
    .sec-left {
      display: flex;
      padding: 1rem;
      font-size: 3rem;
    }
    .sec-right h5 {
      font-size: 2rem;
    }
    .sec-right h6 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;
export default Contact;
