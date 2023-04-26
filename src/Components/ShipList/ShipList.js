import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShipCard from '../ShipCard/ShipCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ShipList() {
  const [ships, setShips] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextUrl, setNextUrl] = useState('https://swapi.dev/api/starships/');
  const [isLoading, setIsLoading] = useState(true);

  const getShips = async () => {
    try {
      const response = await axios.get(nextUrl);
      const newShips = response.data.results.map((ship) => ({
        name: ship.name,
        model: ship.model,
        id: ship.url.match(/(\d+)\/$/)[1],
      }));
      setShips((prevShips) => [...prevShips, ...newShips]);
      setNextUrl(response.data.next);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getShips();
  }, []);

  const handleShipClick = (id) => {
    console.log(`Clicked on ship with id ${id}`);
  };

  const handleLoadMore = () => {
    if (!nextUrl) {
      setHasMore(false);
      return;
    }
    getShips();
  };
  
  return (
    <div className="p-4 flex justify-center items-center">
      {isLoading ? (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 text-yellow-500" />
          <span>Loading...</span>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={ships.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex flex-col gap-4">
            {ships.map((ship, index) => (
              <div key={`${ship.id}-${index}`}>
                <ShipCard
                  ship={ship}
                  onClick={() => handleShipClick(ship.id)}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default ShipList;
