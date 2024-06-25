// import React, { useState, useEffect } from 'react';
// import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const Map = ({ origin, destination, waypoints, transitMode, setDistance, setEta }) => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     if (origin && destination) {
//       setDirections(null); // Reset directions before new calculation
//     }
//   }, [origin, destination, waypoints, transitMode]);

//   const directionsCallback = (response) => {
//     if (response !== null && response.status === 'OK') {
//       setDirections(response);

//       // Calculate the distance and ETA
//       const legs = response.routes[0].legs;
//       const totalDistance = legs.reduce((sum, leg) => sum + leg.distance.value, 0);
//       setDistance(Math.round(totalDistance / 1000)); // Convert to km and round to nearest integer
//       setEta(legs.reduce((sum, leg) => sum + leg.duration.value, 0));
//     }
//   };

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={{ lat: 0, lng: 0 }}
//       zoom={2}
//     >
//       {origin && destination && (
//         <DirectionsService
//           options={{
//             origin,
//             destination,
//             waypoints,
//             travelMode: transitMode,
//           }}
//           callback={directionsCallback}
//         />
//       )}
//       {directions && <DirectionsRenderer directions={directions} />}
//     </GoogleMap>
//   );
// };

// export default Map;



import React, { useState, useEffect } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ origin, destination, waypoints, transitMode, setDistance, setEta }) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (origin && destination) {
      setDirections(null); // Reset directions before new calculation
    }
  }, [origin, destination, waypoints, transitMode]);

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);

      // Calculate the distance and ETA
      const legs = response.routes[0].legs;
      const totalDistance = legs.reduce((sum, leg) => sum + leg.distance.value, 0);
      setDistance(Math.round(totalDistance / 1000)); // Convert to km and round to nearest integer
      setEta(legs.reduce((sum, leg) => sum + leg.duration.value, 0));
    } else {
      console.error(`Error fetching directions: ${response && response.status}`);
      setDistance(0);
      setEta(0);
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origin ? origin.location : { lat: 0, lng: 0 }}
      zoom={origin ? 8 : 2}
    >
      {origin && destination && (
        <DirectionsService
          options={{
            origin: origin.location,
            destination: destination.location,
            waypoints: waypoints.map(waypoint => ({ location: waypoint.location, stopover: true })),
            travelMode: transitMode,
          }}
          callback={directionsCallback}
        />
      )}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;
