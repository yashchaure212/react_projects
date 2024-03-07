import React from "react";

function FilterReducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      // let priceArr = action.payload.map((curr) => {
      //       return curr.price;
      //     });
    
      //     let maxPrice = Math.max(...priceArr);
      
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
        // filters: { ...state.filters, maxPrice, price: maxPrice},
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sort_value: action.payload,
      };
    case "GET_SORT_PRODUCT":
      let filterProduct;
      const { filter_product } = state;
      let allTempProduct = [...filter_product];

      const sortFunction = (a, b) => {
        if (state.sort_value === "a to z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sort_value === "z to a") {
          return b.name.localeCompare(a.name);
        }
        if (state.sort_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sort_value === "highest") {
          return b.price - a.price;
        }
      };

      filterProduct = allTempProduct.sort(sortFunction);

      return {
        ...state,
        filter_product: filterProduct,
      };

    case "UPDATE_FILTER_PRODUCT":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "GET_SEARCH_PRODUCT":
      let { all_product } = state;
      let tempProduct = [...all_product];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempProduct = tempProduct.filter((curr) => {
          return curr.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempProduct = tempProduct.filter((curr) => {
          return curr.category === category;
        });
      }

      if (company !== "all") {
        tempProduct = tempProduct.filter((curr) => {
          return curr.company === company;
        });
      }

      if (color !== "all") {
        tempProduct = tempProduct.filter((curr) => {
          return curr.colors.includes(color);
        });
      }
      
       if(price) {
        tempProduct = tempProduct.filter((curr) => {
          curr.price <= price;
        });
      }

      return {
        ...state,
        filter_product: tempProduct,
      };
  }
  return state;
}

export default FilterReducer;
