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

const setRoleToStorage = async (role: string) => {
  try {
    await AsyncStorage.setItem('role', role);
  } catch (error) {
    console.error('Failed to save the role to storage:', error);
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
interface AuthState {
  token: string | null;
  role: string | null;
}
const initialState: AuthState = {
  token: null,
  role: null,
};

// Define the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload;
      state.token = token;
      state.role = role;

      // Persist the token in AsyncStorage
      setTokenToStorage(token);
      setRoleToStorage(role);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;

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
