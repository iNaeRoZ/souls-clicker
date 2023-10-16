import React, {useState} from "react";

const BarreDeSTM = () => {

  const [stm, setSTM] = useState(100)

  const barreStyle = {
    width: `${stm}%`,
    backgroundColor: stm > 30 ? "green" : "red",
  };

  return (
    <div className="barre-de-stamina">
      <div className="barre" style={barreStyle}>
        {stm}%
      </div>
    </div>
  );
}

export default BarreDeSTM;
