import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import styled from "styled-components";
import PriceFormatter from "../Components/Helper/PriceFormatter";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineReplay30 } from "react-icons/md";
import { GiCheckedShield } from "react-icons/gi";
import Star from "../Components/Star";
import ProductImage from "../Components/ProductImage";
import AddToCart from "../Components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } = useProducts();
  const {
    id: alias,
    name,
    category,
    colors,
    company,
    description,
    image,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;

  const SINGLE_PRODUCT_API = `${API}?id=${id}`;

  useEffect(() => {
    getSingleProduct(SINGLE_PRODUCT_API);
  }, []);

  if (isSingleLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Wrapper>
      <div className="parent">
        <h4 className="page-nav">
          <NavLink className="link" to="/">
            Home /
          </NavLink>
          {`${name}`}
        </h4>
        <div className="main">
          <div className="left">
            <ProductImage imgs={image} />
          </div>
          <div className="right">
            <h3 className="name">
              <span>{name}</span>
            </h3>
            <h3 className="stars info">
              <Star stars={stars} reviews={reviews} />
            </h3>
            <h4 className="review info">
              <span>{`${reviews}`}</span> customer reviews
            </h4>
            <h4 className="mrp strong" medium>
              MRP :{" "}
              <del>
                <PriceFormatter price={price + 250000} />
              </del>
            </h4>
            <h4 className="deal-price strong">
              Deal of the Day : {<PriceFormatter price={price} />}
            </h4>
            <h5 className="desc">{description}</h5>
            <div className="service-icons">
              <div className="sec">
                <FaTruckFast className="icon" />
                <span>Free Delivery</span>
              </div>
              <div className="sec">
                <MdOutlineReplay30 className="icon" />
                <span>30 Days Replacement</span>
              </div>
              <div className="sec">
                <MdOutlineReplay30 className="icon" />
                <span>Fast Delivery</span>
              </div>
              <div className="sec">
                <GiCheckedShield className="icon" />
                <span>2 year Warranty</span>
              </div>
            </div>
            <h3 className="info">
              Available : <span>{stock}</span>
            </h3>
            <h3 className="info">
              ID : <span>{id}</span>
            </h3>
            <h3 className="info">
              Brand : <span>{company}</span>
            </h3>
            <hr />
            {stock && <AddToCart data={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .parent {
    width: 100%;
  }
  .main {
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem 1rem;
  }
  .page-nav {
    font-size: 3rem;
    color: #354e51;
    margin: 2rem;
  }
  .page-nav .link {
    color: #82a78a;
  }
  .left {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 2rem;
  }
  .strong {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .name {
    font-size: 4rem;
    color: #354e51;
  }
  .info {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 0.1rem;
  }
  .desc {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
  .deal-price {
    color: #82a78a;
  }
  .service-icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
  .sec {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sec span {
    font-size: 1rem;
    font-weight: 600;
  }
  .icon {
    font-size: 3rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #354e51;
    color: #fff;
    margin-bottom: 5px;
    transition: 0.1s all ease-in;
  }
  .icon:hover {
    background-color: #50776d;
  }
  span {
    font-weight: 600;
  }

  @media only screen and (min-width: 1400px) {
    width: 1300px;
    margin: auto;
    .parent {
    width: 100%;
  }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .parent {
      width: 100%;
    }
    .main {
      min-height: 100%;
      flex-direction: column;
      margin: 0rem;
    }
    .page-nav {
      font-size: 3rem;
      color: #354e51;
      margin: 2rem;
    }
    .page-nav .link {
      color: #82a78a;
    }
    .left {
      padding: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding: 2rem;
    }
  }
`;
export default SingleProduct;
