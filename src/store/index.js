

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {counter:0 , showCounter: true};

 const counterSlice = createSlice({
  name:'counter',
   initialState:initialState,
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
 


//step 2 import {configurestore} from redux toolkit itslike create store it create store but it allow merging of different reducer in one reducer easier  
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer : counterSlice.reducer
})

//step 3 DISPATCHING ACTIONS THE OBJECT BELOW ARE ACTON OBJECT WHICH CREATE ACTION FOR US I.E NO WORRY OF CREATING ACTION IDENTIFIERS
export const counterActions = counterSlice.actions    //video 20

export default store;

//step 4 now to connect store to all react component we export it
//video 10 now see index.js file in src folder i.e at topmost component we provide our redux store so to become accessible to all component