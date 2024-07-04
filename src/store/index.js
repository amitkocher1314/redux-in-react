

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authSliceReducer from './auth-slice';
 





//step 2 import {configurestore} from redux toolkit itslike create store it create store but it allow merging of different reducer in one reducer easier  
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer : {
    counterStore :counterReducer,
    auth: authSliceReducer
  }
});

//step 3 DISPATCHING ACTIONS THE OBJECT BELOW ARE ACTON OBJECT WHICH CREATE ACTION FOR US I.E NO WORRY OF CREATING ACTION IDENTIFIERS
export default store;

//step 4 now to connect store to all react component we export it
//video 10 now see index.js file in src folder i.e at topmost component we provide our redux store so to become accessible to all component