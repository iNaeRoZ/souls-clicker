import React, {useState} from 'react';

const BarreDeVie = () => {

  const [vie, setVie] = useState(100);
  
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

export default BarreDeVie;
