import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const API = "https://api.pujakaitem.com/api/products";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading:false,
  isSingleError:false,
  singleProduct:{},
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async(url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "MY_SINGLE_API_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    getProducts(API);
  },[]);

  return (
    <AppContext.Provider value={{ ...state , getSingleProduct}}>{children}</AppContext.Provider>
  );
}


const useProducts = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useProducts };
