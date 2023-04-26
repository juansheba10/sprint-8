import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShipCard from '../ShipCard/ShipCard';

function ShipList() {
  const [ships, setShips] = useState([]);
  const navigate = useNavigate();


useEffect(() => {
  axios.get('https://swapi.dev/api/starships/')
    .then((response) => {
      // Extrae el ID de la URL de cada nave
      const shipsWithId = response.data.results.map((ship) => {
        const id = ship.url.match(/(\d+)/)[0];
        return { ...ship, id };
      });

      setShips(shipsWithId);
    });
}, []);

  const handleClick = (ship) => {
    // Redirigir al usuario a la página de detalles de la nave espacial correspondiente
    navigate(`/starships/${ship.url.split('/').slice(-2, -1)[0]}`);
  };

  

  return (
    <div className="flex justify-center items-center flex-col">
      {ships.map((ship) => (
        <ShipCard key={ship.url} ship={ship} onClick={() => handleClick(ship)} />
      ))}
    </div>
  );
}

export default ShipList;

