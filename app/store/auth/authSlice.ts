import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definimos el tipo para el estado inicial
interface AuthState {
  userToken: string | null;
  isLoading: boolean;
  isSignout: boolean;
}

const initialState: AuthState = {
  userToken: null,
  isLoading: false,
  isSignout: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    restoreToken: (state, action: PayloadAction<string | null>) => {
      state.userToken = action.payload;
    },
    signIn: (state, action: PayloadAction<string>) => {
      state.isSignout = false;
      state.userToken = action.payload;
    },
    signOut: (state) => {
      state.isSignout = true;
      state.userToken = null;
    }
  }
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
