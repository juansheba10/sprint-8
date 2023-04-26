import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/unnamed.png';

function ShipDetails() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => {
        setShip(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!ship) {
    return <div>Loading...</div>;
  }

  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="bg-gray-800 text-gray-300 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <img
        src={imageUrl}
        alt={ship.name}
        className="w-full h-48 object-cover mb-4 rounded"
        onError={handleImageError}
      />
      <h1 className="text-2xl font-semibold text-yellow-400 mb-4">{ship.name}</h1>
      <p className="text-lg font-medium">Model: {ship.model}</p>
      {/* Muestra aquí más información sobre la nave */}
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
        <li>Manufacturer: {ship.manufacturer}</li>
        <li>Cost in credits: {ship.cost_in_credits}</li>
        <li>Length: {ship.length}</li>
        <li>Crew: {ship.crew}</li>
        <li>Passengers: {ship.passengers}</li>
        <li>Cargo capacity: {ship.cargo_capacity}</li>
        <li>Hyperdrive rating: {ship.hyperdrive_rating}</li>
      </ul>
    </div>
  );
}

export default ShipDetails;
