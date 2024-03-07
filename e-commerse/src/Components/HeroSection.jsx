import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function HeroSection({ data }) {
  const { title, secTitle } = data;

  return (
    <Wrapper>
      <div className="parent">
        <div className="child">
          <div className="left">
            <h1>
              {title} <br />
              <span>{secTitle}</span>
            </h1>
            <h4>
              Discover the intersection of fashion and technology - where style
              meets innovation!
            </h4>
            <NavLink to="/products">
                <button>Exlore Now</button>
            </NavLink>
          </div>
          <div className="right">
            <div className="slide">
              <img src="./img1.jpg" alt="" />
              <img src="./img2.jpg" alt="" />
              <img src="./img3.jpg" alt="" />
              <img src="./img4.jpg" alt="" />
              <img src="./img5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #84a98c;
  .parent {
  }
  .child {
    height: 80vh;
    width: 100%;
    padding: 5rem 10rem;
    display: flex;
    align-items: center;
    gap: 10rem;
  }
  .parent .left {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .left h4 {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-top: 3rem;
  }
  .left h1 {
    color: #2f3e46;
  }
  span {
    color: transparent;
    -webkit-text-stroke-color: #2f3e46;
    -webkit-text-stroke-width: 2px;
  }
  .left button {
    margin-top: 5rem;
    width: 30%;
    background-color: #2f3e46;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    height: 5rem;
  }
  .left button:hover {
    background-color: #354f52;
  }
  .parent .right {
    border-radius: 20px;
    flex-direction: row;
    width: 25vw;
    height: 70%;
    overflow-x: hidden;
  }
  .slide {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .slide img {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 1400px) {
    background-color: #84a98c;
    .parent {
      width: 1200px;
      margin: auto;
    }
    .child {
      height: 80vh;
      width: 100%;
      padding: 5rem 10rem;
      display: flex;
      align-items: center;
      gap: 10rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .child {
      height: 80vh;
      width: 100vw;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .parent .left {
      padding: 1rem;
      width: 100vw;
      display: flex;
    }
    .left h4 {
      width: 80%;
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
    }
    .left button {
      margin-top: 2rem;
    }
    .parent .right {
      border-radius: 5px;
      width: 70vw;
    }
  }
`;

export default HeroSection;
