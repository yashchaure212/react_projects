import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PriceFormatter from "./Helper/PriceFormatter";

const ProductCard = ({ data }) => {
  const { category, id, image, name, price } = data;
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="parent-prod">
          <div className="image">
            <img className="img" src={image} alt="" />
          </div>
          <div className="info">
            <h5 className="name">{name}</h5>
            <h5 className="price"><PriceFormatter price= {price} /></h5>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .parent-prod {
    height: 30rem;
    width: 35rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    transition: 0.2s all ease-in-out;
    background-color: #82a78a;
  }
  .parent-prod:hover {
    scale: 1.06;
  }
  .image {
    height: 80%;
    width: 100%;
  }
  .img {
    height: 100%;
    object-fit: cover;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }
  .name {
    font-size: 2rem;
    color: #222;
  }
  .price {
    font-size: 1.5rem;
    color: #222;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .parent-prod {
    height: 20rem;
    width: 24rem;
    border-radius: 5px;
    transition: 0.2s all ease-in-out;
    background-color: #82a78a;
    justify-content: center;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .price {
    font-size: 1.2rem;
    color: #222;
  }
  }
`;

export default ProductCard;
