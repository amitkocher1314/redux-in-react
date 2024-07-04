
import {createStore} from 'redux';

//reducer functiom step 2
const counterReducer  = (state = {counter:0 , showCounter: true},action)=>{
  if(action.type ==='increment'){
    return{
        counter:state.counter +1,
        showCounter: state.showCounter

    }
  }
  if(action.type === 'increase'){
    return {
      counter:state.counter + action.amount ,     //this amount is same we pass in counter.js file (action.amount)
      showCounter: state.showCounter
    }
  }
  if(action.type ==='decrement'){
    return{
        counter:state.counter -1,
        showCounter: state.showCounter
    }
  }
  if(action.type ==='toggle'){
    return{
    counter:state.counter,
    showCounter:!state.showCounter
    }
    };
    return state;
};



//store creation step 1 and in step 3 attach to reducer function (see chart in task 12) 
const store = createStore(counterReducer);

export default store;

//step 4 now to connect store to all react component we export it
//video 10 now see index.js file in src folder i.e at topmost component we provide our redux store so to become accessible to all component