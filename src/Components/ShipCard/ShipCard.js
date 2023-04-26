import React from 'react';
import { Link } from 'react-router-dom';

function ShipCard({ ship }) {
  return (
    <Link to={`/starships/${ship.id}`} className="my-ship-card-bg flex items-center justify-center rounded-lg overflow-hidden shadow-md w-64 h-48">
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">{ship.name}</h2>
        <p className="text-gray-600">{ship.model}</p>
      </div>
    </Link>
  );
}

export default ShipCard;
