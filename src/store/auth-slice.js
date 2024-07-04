import {createSlice } from '@reduxjs/toolkit';

  //task16 video 21 we can make new state for authentication in our above counterSlice but to keep things sementaic good we make new slice for auth
  const initialAuthState = {
    isAuthenticated : false
  }   
 
 const authSlice = createSlice({
   name:'authenticaton',
   initialState:initialAuthState,
   reducers:{
      login (state) {
        state.isAuthenticated=true
      },
      logout (state) {
        state.isAuthenticated=false
      }
   }
  }
)
export const authActions = authSlice.actions

export default authSlice.reducer;