import { createAsyncThunk } from '@reduxjs/toolkit';

const APPURL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
export const initialstate = [];
const GETMAKEUP = 'components/home/GET_MAKEUP';

export const getmakeup = createAsyncThunk(
  GETMAKEUP,
  async () => {
    const data = await fetch(`${APPURL}`);
    const response = await data.json();
    const arr = [];
    // eslint-disable-next-line array-callback-return
    response.map((res) => {
      if (res.id <= 305) {
        arr.push(res);
      }
    });
    return arr;
  },
);

const makeupReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${GETMAKEUP}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default makeupReducer;
