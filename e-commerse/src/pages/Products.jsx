import React from "react";
import { useFilterProduct } from "../context/FilterContext";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import SortSection from "../Components/SortSection";
import ProductList from "../Components/ProductList";

function Products() {
  const { filter_product } = useFilterProduct();
  console.log(filter_product);

  return (
    <Wrapper>
      <div className="parent">
        <div className="top box">
          <SortSection />
        </div>
        <div className="left box">
          <FilterSection />
        </div>
        <div className="bottom box">
          <ProductList data={filter_product} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  padding: 5rem 5rem;
  .parent {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% 90%;
    padding: 3rem 0rem;
  }
  .box {
    min-height: 100%;
    width: 100%;
  }
  .top {
    width: 100%;
    height: 100%;
  }
  .bottom {
    width: 100%;
    height: 100%;
  }
  .left {
    width: 100%;
    height: 100%;
    grid-row: 1/3;
  }

  @media only screen and (min-width : 1400px) {
  width: 1200px;
  margin: auto;

}


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 100%;
    padding: 1rem 0rem;
  .parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem;
  }
  .box {
    min-height: 100%;
    width: 100%;
  }
  .top {
    width: 100%;
    height: 100%;
  }
  .bottom {
    width: 100%;
    height: 100%;
  }
  .left {
    width: 100%;
    grid-row: 1/3;
  }
  }
`;
export default Products;
