
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { setAuthData } from '../features/authSlice';
import { getCookie } from '../utils/cookieUtils';
import storyReducer from '../features/storySlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    story: storyReducer,
  },
});

const accessToken = getCookie('accessToken');
const refreshToken = getCookie('refreshToken');
const user = accessToken ? JSON.parse(getCookie('user') || '{}') : null;

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


store.dispatch(setAuthData({ accessToken, refreshToken, user }));