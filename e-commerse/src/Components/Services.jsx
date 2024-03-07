import React from "react";
import styled from "styled-components";
import { FaLock, FaTruck } from "react-icons/fa6";
import { FaHandHoldingUsd, FaShieldAlt } from "react-icons/fa";

function Services() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="left">
          <FaTruck className="icon" />
          <h3>Super fast and free Delivery</h3>
        </div>
        <div className="middle">
          <div className="upper">
            <FaShieldAlt className="icon" />
            <h3>Non-contact Shipping</h3>
          </div>
          <div className="lower">
            <FaHandHoldingUsd className="icon" />
            <h3>Money back Guaranteed</h3>
          </div>
        </div>
        <div className="right">
          <FaLock className="icon" />
          <h3>Super sequired payment section</h3>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`

  .parent {
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 1rem;
  }
  h3 {
    font-size: 2rem;
  }
  .icon {
    font-size: 4rem;
    background-color: #f5f9f3;
    padding: 10px;
    border-radius: 50%;
    margin-right: 5px;
    color: #2e3d45;
  }
  .left {
    flex: 1;
    background-color: #c0dbc6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upper {
    height: 48%;
    background-color: #c0dbc6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lower {
    height: 48%;
    background-color: #c0dbc6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right {
    flex: 1;
    background-color: #c0dbc6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .parent {
    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  .icon {
    font-size: 4rem;
    background-color: #f5f9f3;
    padding: 10px;
    border-radius: 50%;
    margin-right: 5px;
    color: #2e3d45;
  }
  .left {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  .upper {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  .lower {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  .middle {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .right {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  }
`;

export default Services;
