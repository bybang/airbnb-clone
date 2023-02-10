import { getCenter } from 'geolib';
import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import InfoCard from './InfoCard';
import { StarIcon } from '@heroicons/react/solid';


function Mapbox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results object to required object:
  //  { latitude: 52.516272, longitude: 13.377722 }

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  // The latitude and longitue of the center of locations coordinates
  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 12
  });

  return (
    <Map
      mapStyle="mapbox://styles/devbang/cldwfpamh000801pnhijived5"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewport)
      }
    >
      {
        searchResults.map(result => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelectedLocation(result);
              }}
            >
              <p
                role='img'
                className="cursor-pointer text-2xl animate-bounce"
                aria-label='push-pin'
              >
                📍
              </p>
            </Marker>

            {/* The popup if user clikcs on Marker */}
            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() =>
                  setSelectedLocation({})
                }
                latitude={result.lat}
                longitude={result.long}
              >
                <div className='flex flex-col items-center'>
                  <p className='truncate'>
                    {result.title}
                  </p>
                  <hr />
                  <div className='flex items-center gap-20'>
                    <p className="flex items-center font-bold text-sm">
                      <StarIcon className="h-6 cursor-pointer text-red-400" />
                      {result.star}
                    </p>
                    <div className='items-center'>
                      <p className="font-semibold pb-0.5 text-sm">
                        {result.price}
                      </p>
                      <p className="text-right text-xs font-extralight">
                        {result.total}
                      </p>
                    </div>
                  </div>
                </div>
              </Popup>
            ) : (false)}
          </div>
        ))
      }

    </Map >
  )
}

export default Mapbox