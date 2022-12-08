import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";
import { signIn } from "./redux/counter/signIn";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const toggle = useSelector((state) => state.signIn.value);
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>count:{count}</p>
      <button onClick={() => dispatch(decrement())}>Dicrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(signIn())}>Toggle</button>

      <p>here:{toggle ? "true" : "false"}</p>
    </div>
  );
}
