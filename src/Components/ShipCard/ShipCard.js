import React from 'react';
import { Link } from 'react-router-dom';

function ShipCard({ ship }) {
  return (
    <Link
      to={`/starships/${ship.id}`}
      className="bg-gray-700 flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-md h-38 w-96 hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition duration-300"
    >
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2 text-yellow-400">{ship.name}</h2>
        <p className="text-gray-300 text-sm">{ship.model}</p>
      </div>
      <div className="mt-auto mb-4 flex justify-center items-center">
        <span className="text-yellow-500">
          <svg
            className="fill-current w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M15.678 18.743l-2.488-6.77 5.677-4.923-7.505-.643L10 1.257 7.639 6.407.133 7.05l5.677 4.923L3.822 18.743 10 14.514l6.178 4.229z" />
          </svg>
        </span>
        <span className="text-gray-300 text-xs">{ship.passengers} passengers</span>
      </div>
    </Link>
  );
}

export default ShipCard;

