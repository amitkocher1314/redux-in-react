
import {createStore} from 'redux';

//reducer functiom step 2
const counterReducer  = (state = {counter:0},action)=>{
  if(action.type ==='increment'){
    return{
        counter:state.counter +1
    }
  }
  if(action.type === 'increase'){
    return {
      counter:state.counter + action.amount      //this amount is same we pass in counter.js file (action.amount)
    }
  }
  if(action.type ==='decrement'){
    return{
        counter:state.counter -1
    }
  };
  return state;
}
//store creation step 1 and in step 3 attach to reducer function (see chart in task 12) 
const store = createStore(counterReducer);

export default store;

//step 4 now to connect store to all react component we export it
//video 10 now see index.js file in src folder i.e at topmost component we provide our redux store so to become accessible to all component