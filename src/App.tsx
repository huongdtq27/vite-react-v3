import { useState } from "react";
import "./App.css";
import TextCard from "./components/TextCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <hr></hr>
      <h1>Text card</h1>
      <TextCard />
    </>
  );
}

export default App;
