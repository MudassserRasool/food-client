// src/redux/authSlice.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';

// Helper function to manage AsyncStorage interactions
const setTokenToStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Failed to save the token to storage:', error);
  }
};

const removeTokenFromStorage = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('Failed to remove the token from storage:', error);
  }
};

const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token || null;
  } catch (error) {
    console.error('Failed to retrieve the token from storage:', error);
    return null;
  }
};

const initialState = {
  user: null,
  token: null, // Will be initialized after retrieving from AsyncStorage
};

// Define the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;

      // Persist the token in AsyncStorage
      setTokenToStorage(token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;

      // Remove the token from AsyncStorage
      removeTokenFromStorage();
    },
    initializeToken: (state, action) => {
      state.token = action.payload; // Populate token from AsyncStorage
    },
  },
});

export const { setCredentials, logout, initializeToken } = authSlice.actions;

// Thunk to initialize token from AsyncStorage
export const initializeAuth = () => async (dispatch: Dispatch) => {
  const token = await getTokenFromStorage();
  dispatch(initializeToken(token));
};

export default authSlice.reducer;
