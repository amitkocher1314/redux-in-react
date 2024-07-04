import {createSlice } from '@reduxjs/toolkit';
const initialCounterState = {counter:0 , showCounter: true};

 const counterSlice = createSlice({
  name:'counter',
   initialState:initialCounterState,
   reducers:{
    increment (state) {
      state.counter++;              //HERE NO PROBLEM AS REDUX USE INTERNAL TOOLKIT CALLED INNER WHICH KEEP TRACK OF THIS TASK AND PREVENT STATE MUTUATION PROBLEM I.E OUR CODE IS IMMUTUABLE NOW ALSO
    },
    decrement (state) {
      state.counter--; 
    },
    increase (state,action) {
      state.counter =   state.counter + action.payload
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter
    }
   }
 });
 export const counterActions = counterSlice.actions    //video 20

 export default counterSlice.reducer;