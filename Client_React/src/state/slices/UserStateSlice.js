import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    email:'',
    picture:null
};

const UserStateSlice = createSlice({
  name: 'AuthState',
  initialState,
  reducers: {
    setUserState: (state, action) => {
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.picture = action.payload.picture;
    },
    resetUserState: (state) => {
        state.userName = '';
        state.email = '';
        state.picture = null;
    },
},
});

export const { setUserState,resetUserState} = UserStateSlice.actions;
export default UserStateSlice.reducer;