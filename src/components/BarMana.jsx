import React, { Component } from "react";

class BarreDeMana extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mana: 100, // Vous pouvez initialiser la valeur de la vie à ce que vous voulez
    };
  }

  render() {
    const { mana } = this.state;
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
}

export default BarreDeMana;
