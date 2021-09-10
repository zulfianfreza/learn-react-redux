import axios from 'axios';

export const setProduct = () => (dispatch) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((result) => {
      const response = result.data;
      dispatch({
        type: 'SET_DATA_PRODUCT',
        payload: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
