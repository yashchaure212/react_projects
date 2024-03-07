import React from "react";
import styled from "styled-components";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
  const { featuredProducts, isLoading } = useProducts();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Wrapper>
      <div className="parent">
        <h3 className="head-1">Check Now !</h3>
        <h2 className="head-2">Our Featured Services</h2>
        <div className="featuredCard">
          {featuredProducts.map((curr) => {
            return (
              <div key={curr.id}>
                <ProductCard className="cards" data={{ ...curr }} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .parent {
    height: 60%;
    width: 100vw;
    padding: 2rem;
  }
  .featuredCard {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
  .head-1 {
    font-size: 2rem;
    padding: 1rem;
    font-weight: 600;
    color: #354e51;
  }
  .head-2 {
    font-size: 5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #82a78a;
  }

  @media only screen and (min-width: 1400px) {
    width: 1300px;
    margin: auto;

    .parent {
      width: 100%;
      padding: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 90vh;
    .parent {
      min-height: 60vh;
      width: 100vw;
      padding: 2rem;
    }
    .featuredCard {
      flex-direction: column;
      gap: 2rem;
    }
    .head-1 {
      font-size: 1%.5;
      padding: 0.5rem;
    }
    .head-2 {
      font-size: 3rem;
      padding: 1rem;
      font-weight: 700;
    }
  }
`;

export default FeatureProducts;
