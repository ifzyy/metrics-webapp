import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_DATA = 'new-app/fetch/FETCH_DATA';

const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return action.payload;
    case `${FETCH_DATA}/rejected`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchData = createAsyncThunk(FETCH_DATA, async () => {
  try {
    const { data } = await axios.get('https://api.covid19api.com/summary');
    return data.Countries;
  } catch (error) {
    return error;
  }
});

export default countriesReducer;
