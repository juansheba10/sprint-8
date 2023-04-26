import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/unnamed.png';
import PilotCard from '../PilotCard/PilotCard';

function ShipDetails() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => {
        setShip(response.data);
        return response.data.pilots;
      })
      .then((pilotUrls) => {
        const promises = pilotUrls.map((url) => axios.get(url));
        return Promise.all(promises);
      })
      .then((responses) => {
        const newPilots = responses.map((response) => ({
          name: response.data.name,
          imageUrl: `https://starwars-visualguide.com/assets/img/characters/${response.data.url.match(/(\d+)\/$/)[1]}.jpg`,
        }));
        setPilots(newPilots);
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
      {/* Muestra las tarjetas de los pilotos */}
      <h2 className="text-2xl font-semibold text-yellow-400 my-4">Pilots</h2>
      <div className="grid grid-cols-2 gap-4">
        {pilots.map((pilot) => (
          <div key={pilot.name}>
            <PilotCard name={pilot.name} imageUrl={pilot.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipDetails;