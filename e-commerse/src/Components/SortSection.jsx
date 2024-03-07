import React from "react";
import styled from "styled-components";
import { useFilterProduct } from "../context/FilterContext";

const SortSection = () => {
  const{sorting, filter_product} = useFilterProduct();
  return (
    <Wrapper>
      <div className="sort-parent">
        <div className="sort-left">
          <span>E-Shop</span>
        </div>
        <div className="sort-mid">
          <span>Products ({filter_product.length})</span>
        </div>
        <div className="sort-right">
          <form action="#">
            <label className="sort-label" htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price:(Lowest)</option>
              <option value="highest">Price:(Highest)</option>
              <option value="a to z">Price:(A to Z)</option>
              <option value="z to a">Price:(Z to A)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f5f9f3;

  .sort-parent {
    padding: 1.5rem;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sort-left{
      font-size: 2rem;
    }
    .sort-mid{
      font-size: 2rem;
    }
    select{
    background-color: transparent;
    padding: 5px;
    height: 3rem;
    width: 15rem;
  }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 10rem;

  .sort-parent {
    padding: 2rem;
    
    select{
    background-color: transparent;
    padding: 5px;
    height: 5rem;
    width: 15rem;
  }
  }
  }
`;
export default SortSection;
