import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux' ;

//step 4
import { counterActions } from '../store/index';
const Counter = () => {

//use selector hook to extract value from redux central store  BASICALLY WE ARE ADDING SUBSCRIPTION PART to component
 const counter =    useSelector(state=> state.counterStore.counter)          //in use selector we pass function which recive state managed by our REDUX
 const show = useSelector(state => state.counterStore.showCounter);

 //use dispatch to dispatch action provided in central store
 const dispatch = useDispatch();

 const incrementHandler = ()=>{
    dispatch(counterActions.increment());
 }
 const increseHandler = () =>{
  dispatch(counterActions.increase(5))
 }
 const decrementHandler =()=>{
     dispatch(counterActions.decrement())
 }
 

 const toggleCounterHandler = () => {
  dispatch(counterActions.toggleCounter)
 };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>-- {counter} --</div>}      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
