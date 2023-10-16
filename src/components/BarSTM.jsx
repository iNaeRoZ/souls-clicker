import React, { Component } from "react";

class BarreDeSTM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stm: 100, // Vous pouvez initialiser la valeur de la vie à ce que vous voulez
    };
  }

  render() {
    const { stm } = this.state;
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
}

export default BarreDeSTM;
