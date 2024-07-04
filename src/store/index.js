

import { configureStore, createSlice } from '@reduxjs/toolkit';

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





//step 2 import {configurestore} from redux toolkit itslike create store it create store but it allow merging of different reducer in one reducer easier  
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer : {
    counterStore :counterSlice.reducer,
    auth: authSlice.reducer
  }
});

//step 3 DISPATCHING ACTIONS THE OBJECT BELOW ARE ACTON OBJECT WHICH CREATE ACTION FOR US I.E NO WORRY OF CREATING ACTION IDENTIFIERS
export const counterActions = counterSlice.actions    //video 20
export const authActions = authSlice.actions
export default store;

//step 4 now to connect store to all react component we export it
//video 10 now see index.js file in src folder i.e at topmost component we provide our redux store so to become accessible to all component