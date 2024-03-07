import React from "react";
import styled from "styled-components";
import { useFilterProduct } from "../context/FilterContext";
import PriceFormatter from "./Helper/PriceFormatter"

const FilterSection = () => {
  const {
    updateFilter,
    all_product,
    filters: { text, maxPrice, price, minPrice },
  } = useFilterProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getUniqueData = (data, property) => {
    let newVal = data.map((curr) => {
      return curr[property];
    });

    if (property === "colors") {
      //you can use flat() method here
      return ["all", ...new Set([].concat(...newVal))];
    } else {
      newVal = ["all", ...new Set(newVal)];
      return newVal;
    }
  };

  // for category
  const categoryData = getUniqueData(all_product, "category");

  //for compony
  const companyData = getUniqueData(all_product, "company");

  //for colors
  const colorData = getUniqueData(all_product, "colors");

  return (
    <Wrapper>
      <div className="filter-parent">
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" value={text} name="text" onChange={updateFilter} />
          <div className="div-categ">
            <h3>Short By Category : </h3>
            {categoryData.map((curr, index) => {
              return (
                <button
                  type="button"
                  value={curr}
                  name="category"
                  key={index}
                  onClick={updateFilter}
                >
                  {curr}
                </button>
              );
            })}
          </div>
          <div className="div-comp">
          <h3>Short By Company : </h3>
            {companyData.map((curr, index) => {
              return (
                <button
                  type="button"
                  value={curr}
                  name="company"
                  key={index}
                  onClick={updateFilter}
                >
                  {curr}
                </button>
              );
            })}
          </div>
          <div className="div-color">
          <h3>Short By Color : </h3>
            {colorData.map((curr, index) => {
              return (
                <button
                  type="button"
                  className="color-btn"
                  style={{ backgroundColor: curr }}
                  key={index}
                  name="color"
                  value={curr}
                  onClick={updateFilter}
                >
                  {""}
                </button>
              );
            })}
          </div>
          {/* <div className="div">
            <span>
              <PriceFormatter price={price} />
            </span>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilter}
            />
          </div> */}
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 10rem 0rem;
  height: 100%;
  width: 100%;
  background-color: #f5f9f3;

  .filter-parent {
    height: 100%;
    width: 100%;

    input{
      margin: 1rem;
      width: 90%;
      border-radius: 5px;
    }
    .div-categ{
      padding: 2rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-bottom: 1px solid #222;
      gap: 1rem;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #50776d;
        color: #fff;
      }
    }
    .div-comp{
      padding: 2rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #222;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #50776d;
        color: #fff;
      }
    }
    .div-color{
      padding: 4rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 4rem;
        height: 4rem;
      }
    }
    h3{
      font-size: 2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
    background-color: #f5f9f3;

  .filter-parent {
    height: 100%;
    width: 100%;

    input{
      margin: 1rem;
      width: 90%;
      border-radius: 5px;
    }
    .div-categ{
      padding: 2rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-bottom: 1px solid #222;
      gap: 1rem;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #50776d;
        color: #fff;
      }
    }
    .div-comp{
      padding: 2rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #222;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #50776d;
        color: #fff;
      }
    }
    .div-color{
      padding: 4rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;

      button{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 4rem;
        height: 4rem;
      }
    }
    h3{
      font-size: 2rem;
    }
  }
  }
`;

export default FilterSection;
