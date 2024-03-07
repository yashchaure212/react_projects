import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";


function Nav() {
  const {total_Items} = useCartContext();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <MainNav>
      <div className={showMenu ? "active navbar" : "navbar"}>
        <div className="navbar-list">
          <ul className="list">
            <li>
              <Link className="link" onClick={() => handleCloseMenu()} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link"
                onClick={() => handleCloseMenu()}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link"
                onClick={() => handleCloseMenu()}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="link"
                onClick={() => handleCloseMenu()}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="link"
                onClick={() => handleCloseMenu()}
                to="/cart"
              >
                <IoCartOutline className="cart" />
                <span className="cart-total">{total_Items}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <RiMenu3Fill
        onClick={() => handleShowMenu()}
        className={showMenu ? " icon menu-icon" : "active icon menu-icon"}
      />
      <IoClose
        onClick={() => handleCloseMenu()}
        className={showMenu ? "active icon close-icon " : " icon close-icon"}
      />
    </MainNav>
  );
}

const MainNav = styled.nav`
  .icon {
    display: none;
  }
  .navbar {
    padding: 2rem;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .navbar-list {
    height: 100%;
    width: 100%;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 5rem;
    justify-content: space-between;
  }
  .link {
    color: #2F3E46;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0ms.1s all ease-in;
  }
  .link:hover {
    color: #84A98C;
  }
  .cart {
    font-size: 2.5rem;
  }
  .cart-total {
    height: 15px;
    width: 15px;
    top: 20%;
    right: 8px;
    position: absolute;
    background-color: #84A98C;
    color: #fff;
    padding: 2px;
    border-radius: 50%;
    font-size: 1.3rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .icon {
      display: none;
      color: #000;
      z-index: 99;
      position: absolute;
      font-size: 3rem;
      right: 10%;
      top: 5%;
    }
    .navbar {
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      position: absolute;
      background-color: #F6FAF4;
      display: none;
    }
    .active {
      display: inline-block;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      margin-top: 15rem;
    }
    .link {
      color: #384431;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 600;
    }
    .link:active {
      color: #454b41;
    }
    .cart {
      font-size: 5rem;
    }
    .cart-total {
      display: none;
      
    }
  }
  @media (min-width: ${({ theme }) => theme.media.deskop}) {
    width: 100vh;
  .navbar {
    padding: 2rem;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .navbar-list {
    height: 100%;
    width: 100%;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  }
  .link {
    color: #2F3E46;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0ms.1s all ease-in;
  }
  .link:hover {
    color: #84A98C;
  }
  .cart {
    font-size: 2.5rem;
  }
  .cart-total {
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20%;
    right: 8px;
    position: absolute;
    background-color: #84A98C;
    color: #fff;
    padding: 2px;
    border-radius: 50%;
    font-size: 1.2rem;
  }
  }
  
`;

export default Nav;
