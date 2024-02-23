import { useState } from "react";
// import { nord } from "nord";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount}/>

    </div>
  );
}

// Here: This component doesn't need setCount ...Since it is needed in its child compoment ...it is `prop drilled` through this component.
// to rectify this, we need to use `Context API`
function Count({ count, setCount }) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />
  </div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>

      <button onClick={() => {
          setCount(count + 1);
        }}>Increase</button>

      <button onClick={() => {
          setCount(count - 1);
        }}>Decrease</button>

    </div>
  );
}

export default App;
