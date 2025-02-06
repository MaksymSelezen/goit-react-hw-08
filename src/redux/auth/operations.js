import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});
export const setHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  delete goitApi.defaults.headers.common.Authorization;
};
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post('/users/signup', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.data.code == 11000) {
        toast.error('User alredy exist!');
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post('/users/login', credentials);
      setHeader(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.post('/users/logout');
      clearAuthHeader();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("token isn't exist");
    }
    setHeader(savedToken);
    try {
      const { data } = await goitApi.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
