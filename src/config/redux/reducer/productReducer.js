const initialStateProduct = {
  dataProduct: [],
};

const productReducer = (state = initialStateProduct, action) => {
  if (action.type === 'SET_DATA_PRODUCT ') {
    return {
      ...state,
      dataProduct: action.payload,
    };
  }
  return state;
};

export default productReducer;
