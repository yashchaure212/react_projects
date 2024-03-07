import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import {
  FaFacebook,
  FaLongArrowAltRight,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="top">
          <div className="sec1 sec">
            <h3>SHOP</h3>
            <ul>
              <li>
                {" "}
                <span>Ladies</span>
              </li>
              <li>
                {" "}
                <span>Men</span>
              </li>
              <li>
                {" "}
                <span>Kids</span>
              </li>
              <li>
                {" "}
                <span>Baby</span>
              </li>
              <li>
                {" "}
                <span>Sports</span>
              </li>
              <li>
                {" "}
                <span>Magazine</span>
              </li>
            </ul>
          </div>
          <div className="sec2 sec">
            <h3>CORPORATE INFO</h3>
            <ul>
              <li>
                {" "}
                <span>Carrier</span>
              </li>
              <li>
                {" "}
                <span>About</span>
              </li>
              <li>
                {" "}
                <span>Sustainability</span>
              </li>
              <li>
                {" "}
                <span>Press</span>
              </li>
              <li>
                {" "}
                <span>Invetor</span>
              </li>
              <li>
                {" "}
                <span>Corporate</span>
              </li>
            </ul>
          </div>
          <div className="sec3 sec">
            <h3>HELP</h3>
            <ul>
              <li>
                {" "}
                <span>Customer</span>
              </li>
              <li>
                {" "}
                <span>My Store</span>{" "}
              </li>
              <li>
                {" "}
                <span>Find a Store</span>{" "}
              </li>
              <li>
                {" "}
                <span>Legal and Privacy</span>{" "}
              </li>
              <li>
                {" "}
                <span>Contact</span>
              </li>
              <li>
                {" "}
                <span>Report a scam</span>{" "}
              </li>
              <li>
                {" "}
                <span>Cookie Notice</span>{" "}
              </li>
              <li>
                {" "}
                <span>Cookie Setting</span>{" "}
              </li>
            </ul>
          </div>
          <div className="sec4 sec">
            <h5>
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </h5>
            <h4>
              <span>
                Read More <FaLongArrowAltRight />
              </span>
            </h4>
          </div>
        </div>

        <div className="bottom">
          <div className="logos">
            <FaInstagram className="icon" />
            <FaTiktok className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaFacebook className="icon" />
          </div>
          <h5>
            The content of this site is copyright-protected and is the property
            of owner.
          </h5>
          <h2>E-Shop</h2>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .parent {
    margin-top: 1rem;
    height: 60%;
    width: 100vw;
    background-color: #F6FAF4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    height: 60%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .sec {
    font-size: 2rem;
    padding: 3rem;
    width: 18%;
  }
  .sec:nth-child(4) {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
    justify-content: center;
  }
  .sec h3 {
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .sec li {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  .sec span {
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
  }
  .sec span:hover {
    color: #84A98C;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem;
  }
  .logos {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #354F52;
  }
  .icon:hover {
    color: #84A98C;
  }
  .bottom h5 {
    font-size: 1.2rem;
  }
  @media (min-width : 1200px) {
    .parent {
      width: 100vw;
      margin: auto;
    }
    .top{
      width: 1350px;
      margin: auto;
    }
    .bottom{
      width: 1350px;
      margin: auto;
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .parent {
    margin-top: 1rem;
    height: 50vh;
    width: 100vw;
    background-color: #F6FAF4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .sec {
    font-size: 1.5;
    padding: 1rem;
    width: 30%;
  }
  .sec:nth-child(4) {
    display: none;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0rem;
  }
  .logos {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #354F52;
  }
  }
`;
export default Footer;
