import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definimos el tipo para el estado inicial
interface AuthState {
  userData: object | null;
  isSignout: boolean;
}

const initialState: AuthState = {
  userData: null,
  isSignout: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object | null>) => {
      state.userData = action.payload;
      state.isSignout = false;
    },
    isSignOut: state => {
      state.isSignout = true;
      state.userData = null;
    },
  },
});

export const { setUser, isSignOut } = authSlice.actions;
export default authSlice.reducer;
