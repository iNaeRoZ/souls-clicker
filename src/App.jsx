import { useState } from "react";
import Enemy from "./components/Enemy";
import "./App.css";
import BarreDeVie from "./components/BarVie";
import BarreDeSTM from "./components/BarSTM";
import BarreDeMana from "./components/BarMana";
function App() {
  return (
    <>
      <div>
        <Enemy />
        STATS
        <BarreDeVie />
        ----
        <BarreDeSTM />
        ----
        <BarreDeMana />
      </div>
    </>
  );
}

export default App;
