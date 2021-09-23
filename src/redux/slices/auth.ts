import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../config/axios';
import { ReduxState } from '../../types/redux';

export const signup = createAsyncThunk(
  'users/signupUser',
  async (formData: { firstName: string; lastName: string; email: string; password: string }) => {
    const response = await axios.post('/developers/signup', formData);

    return { ...response.data.data, token: response.data.token } as ReduxState['auth'];
  }
);

export const login = createAsyncThunk('users/loginUser', async (formData: { email: string; password: string }) => {
  const response = await axios.post('/developers/login', formData);

  return { ...response.data.data, token: response.data.token } as ReduxState['auth'];
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    loading: false,
    error: false,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Signup Cases
     */
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    });

    builder.addCase(signup.rejected, (state) => {
      // Reset State
      state.data = {};

      //  Update State
      state.error = true;
      state.loading = false;
      state.isAuthenticated = false;
    });

    /**
     * Login Cases
     */
    builder.addCase(login.pending, (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    });

    builder.addCase(login.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.isAuthenticated = false;
    });
  },
});

const { reducer } = authSlice;

export default reducer;
