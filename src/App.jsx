import { useState } from "react";
import Enemy from "./components/Enemy";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Enemy />
    </>
  );
}

export default App;

const enemyList 