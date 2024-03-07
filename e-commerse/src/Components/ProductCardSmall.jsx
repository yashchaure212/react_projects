import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PriceFormatter from "./Helper/PriceFormatter";

const ProductCardSmall = ({ data }) => {
  const { category, id, image, name, price } = data;
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card-parent">
          <div className="card-image">
            <img className="card-img" src={image} alt="" />
          </div>
          <div className="card-info">
            <h5 className="card-name">{name}</h5>
            <h5 className="card-price">
              <PriceFormatter price={price} />
            </h5>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card-parent{
    background-color: #bebebe;
    height: 18rem;
    width: 23rem;
    margin: 0.5rem;
  }
  .card-parent:hover{
    scale: 1.02;
  }
  .card-image{

  }
  .card-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #bebebe;
  }
  .card-name{
    font-size: 1.3rem;
    color: #222;
  }
  .card-price{
    font-size: 1.3rem;
    color: #222;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .card-parent{
    background-color: #bebebe;
    height: 15rem;
    width: 20rem;
  }
  .card-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
`

export default ProductCardSmall;
