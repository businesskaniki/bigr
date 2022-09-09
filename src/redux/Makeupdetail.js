import { createAsyncThunk } from '@reduxjs/toolkit';

const initialstate = ['loading'];
const GETDETAILS = 'components/home/GET_DETAILS';

export const getdetail = createAsyncThunk(
  GETDETAILS,
  async (url) => {
    const data = await fetch(`${url}`);
    const response = await data.json();
    return response;
  },
);

const makeupdetailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${GETDETAILS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default makeupdetailReducer;
