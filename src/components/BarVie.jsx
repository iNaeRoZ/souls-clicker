import React, { Component } from 'react';

class BarreDeVie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vie: 100, // Vous pouvez initialiser la valeur de la vie à ce que vous voulez
    };
  }

  render() {
    const { vie } = this.state;
    const barreStyle = {
      width: `${vie}%`,
      backgroundColor: vie > 30 ? 'red' : 'red',
    };

    return (
      <div className="barre-de-vie">
        <div className="barre" style={barreStyle}>
          {vie}%
        </div>
      </div>
    );
  }
}

export default BarreDeVie;
