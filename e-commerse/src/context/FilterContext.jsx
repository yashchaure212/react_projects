import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer"
import { useProducts } from "./ProductContext";

export const FilterContext = createContext();

const initialState = {
    filter_product: [],
    all_product: [],
    sort_value: "lowest",
    filters:{
      text:"",
      category: "all",
      company: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    }
}

const FilterContextProvider = ({ children }) => {

    const {products} = useProducts();

  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:"GET_PRODUCT", payload:products});
    },[products, state.filters]
    
    )

  //Sort Products 
  const sorting = (e) => {
    let user_value = e.target.value;
    dispatch({type:"GET_SORT_VALUE", payload: user_value })
  }

  //update Filter 
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({type:"UPDATE_FILTER_PRODUCT", payload:{name, value}})
  };

  useEffect(() => {
    dispatch({type:"GET_SEARCH_PRODUCT"})
    dispatch({type:"GET_SORT_PRODUCT", payload:products})
  },[state.sort_value, state.filters, state.category, state.company])

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterProduct = () => {
  return useContext(FilterContext);
};

export default FilterContextProvider;
