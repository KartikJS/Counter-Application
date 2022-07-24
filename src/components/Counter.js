import classes from "./Counter.module.css";

import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isAuthenticated && show && (
        <div className={classes.value}>{counter}</div>
      )}
      <div>
        {isAuthenticated && show && (
          <button onClick={incrementHandler}>Increment</button>
        )}
        {isAuthenticated && show && (
          <button onClick={increaseHandler}>Increment By 10</button>
        )}
        {isAuthenticated && show && (
          <button onClick={decrementHandler}>Decrement</button>
        )}
      </div>
      <button
        disabled={isAuthenticated === false}
        className={` ${!isAuthenticated === false ? classes.disabled : ""}`}
        onClick={toggleCounterHandler}
      >
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
