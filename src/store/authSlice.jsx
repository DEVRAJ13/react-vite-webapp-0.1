import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage if available
const storedAuth = localStorage.getItem("authState")
  ? JSON.parse(localStorage.getItem("authState"))
  : { isAuthenticated: false, user: null };

const initialState = storedAuth;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;

      // Only store serializable fields
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName || '',
        photoURL: action.payload.photoURL || '',
      };

      // Save to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;

      // Remove from localStorage
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
