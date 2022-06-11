import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./assets/styles/App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./app/counter/counterReducer";

function App() {
  /*  */
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <div className="container">
      {/* Title */}
      <div className="container">
        <h2 className="title">Counter</h2>
        <span className="subtitle">Redux Toolkit</span>
      </div>

      {/* Box value */}
      <div className="container value">
        <span>{value}</span>
      </div>

      {/* Control buttons */}
      <div className="control">
        <button
          className="button-increment"
          onClick={() => dispatch(increment())}
        >
          <AiOutlinePlus className="icon" />
        </button>

        <button className="button-reset" onClick={() => dispatch(reset())}>
          Reset
        </button>

        <button
          className="button-decrement"
          onClick={() => dispatch(decrement())}
        >
          <AiOutlineMinus className="icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
