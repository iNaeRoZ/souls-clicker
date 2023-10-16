import React, {useState} from "react";

const BarreDeMana =()=> {

  const [mana, setMana] = useState(100);

  const barreStyle = {
    width: `${mana}%`,
    backgroundColor: mana > 30 ? "blue" : "blue",
  };

  return (
    <div className="barre-de-mana">
      <div className="barre" style={barreStyle}>
        {mana}%
      </div>
    </div>
  );
}

export default BarreDeMana;
