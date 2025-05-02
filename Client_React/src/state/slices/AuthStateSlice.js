import { createSlice } from '@reduxjs/toolkit';

const initialState = {isLoggedIn: false};

const AuthStateSlice = createSlice({
  name: 'AuthState',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
        state.isLoggedIn = action.payload;
    },
    setLoggedOut: (state) => {
        state.isLoggedIn = false;
    },
},
});

export const { setLoggedIn,setLoggedOut} = AuthStateSlice.actions;
export default AuthStateSlice.reducer;
