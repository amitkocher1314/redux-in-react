import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux' ;
const Counter = () => {

//use selector hook to extract value from redux central store  BASICALLY WE ARE ADDING SUBSCRIPTION PART to component
 const counter =    useSelector(state=> state.counter)          //in use selector we pass function which recive state managed by our REDUX
  
 //use dispatch to dispatch action provided in central store
 const dispatch = useDispatch();

 const incrementHandler = ()=>{
    dispatch({type:'increment'})
 }
 const increseHandler = () =>{
  dispatch({
    type:'increase' , amount: 5
  });
 }
 const decrementHandler =()=>{
     dispatch({type:'decrement'})
 }
 
 const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
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
