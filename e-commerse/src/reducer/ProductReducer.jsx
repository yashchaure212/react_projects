


function ProductReducer(state, action) {

  switch(action.type){
    case "SET_LOADING":
        return {
            ...state,
            isLoading:true,
        };
    case "API_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true,
        };
    case "MY_API_DATA":
        const featuredProducts = action.payload.filter((curr) => {
            return curr.featured === true;
        }) 
        return{
            ...state,
            isLoading:false,
            products: action.payload,
            featuredProducts: featuredProducts,
        };
    case "SET_SINGLE_LOADING":
        return {
            ...state,
            isSingleLoading:true,
        };
    case "API_SINGLE_ERROR":
        return {
            ...state,
            isSingleLoading:false,
            isSingleError:true,
        };
    case "MY_SINGLE_API_DATA":
        return{
            ...state,
            isSingleLoading:false,
            singleProduct: action.payload,
        };
  }
  return state
}

export default ProductReducer