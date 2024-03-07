import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <MainHeader>
      <div className="parent">
        <NavLink to="/">
          <h1 className="logo">E-shop</h1>
        </NavLink>
        <Nav />
      </div>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  background-color: #f6faf4;
  width: 100vw;
  .parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 10rem;
  }

  .logo {
    color: #2e3d45;
    font-size: 3rem;
  }

  .logo {
    width: 12rem;
  }

  @media only screen and (min-width: 1400px) {
    margin: auto;
    width: 100%;
    .parent {
      width: 1600px;
      margin: auto;
    }
  }
`;

export default Header;
