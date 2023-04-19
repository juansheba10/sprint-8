import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShipCard from '../ShipCard/ShipCard';

function ShipList() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then((response) => setShips(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {ships.map((ship) => (
        <ShipCard key={ship.url} ship={ship} />
      ))}
    </div>
  );
}

export default ShipList;
