// src/features/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: any | null; 
}

const initialState: AuthState = {
  accessToken: Cookies.get("accessToken") || null,
  refreshToken: Cookies.get("refreshToken") || null,
  user: null,
};

export const loadAuthFromCookies = () => {
  const accessToken = Cookies.get('accessToken') || null;
  const refreshToken = Cookies.get('refreshToken') || null;
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user') as string) : null;

  return { accessToken, refreshToken, user };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{
        accessToken: string | null;
        refreshToken: string | null ;
        user: any;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;

      // Save tokens in cookies
      Cookies.set("accessToken", action.payload.accessToken as string, { expires: 7 }); // Expires in 7 days
      Cookies.set("refreshToken", action.payload.refreshToken as string, { expires: 7 });
      Cookies.set("user", JSON.stringify(action.payload.user), { expires: 7 });
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;

      // Remove tokens from cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
