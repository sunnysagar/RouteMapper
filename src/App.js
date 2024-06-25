// import React, { useState } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import Map from './components/Map';
// import SearchBox from './components/SearchBox';
// import './App.css';

// const App = () => {
//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const [waypoints, setWaypoints] = useState([]);
//   const [distance, setDistance] = useState('');
//   const [eta, setEta] = useState(null);
//   const [showWaypointInput, setShowWaypointInput] = useState(false);
//   const [transitMode, setTransitMode] = useState('DRIVING');

//   const handleOriginSelect = (place) => {
//     // setOrigin(place);

//     setOrigin({
//       location: { lat: place.lat, lng: place.lng },
//       label: place.name,
//     });
//   };

//   const handleDestinationSelect = (place) => {
//     // setDestination(place);

//     setDestination({
//       location: { lat: place.lat, lng: place.lng },
//       label: place.name,
//     });

//   };

//   const handleAddWaypoint = (place) => {
//     // setWaypoints([...waypoints, { location: place, stopover: true }]);
//     // setShowWaypointInput(false); // Hide waypoint input after adding

//     setWaypoints([...waypoints, { location: { lat: place.lat, lng: place.lng }, stopover: true, label: place.name }]);
//     setShowWaypointInput(false); // Hide waypoint input after adding


//   };

//   const handleDeleteWaypoint = (index) => {
//     setWaypoints(waypoints.filter((_, i) => i !== index));
//   };

//   const handleCalculate = () => {
//     if (origin && destination) {
//       setDistance(null); // Reset distance before calculation
//       setEta(null); // Reset ETA before calculation
//     }
//   };

//   const handleTransitModeChange = (e) => {
//     setTransitMode(e.target.value);
//   };

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     return `${hours} hrs ${minutes} mins`;
//   };

//   return (
//     <div className="app">
//     <div className="center"><h1>Route Mapper</h1> </div>
//       <div className="search-container">
//         <LoadScript googleMapsApiKey="AIzaSyA2lKWbyZZcdmlAf9fniS7dR6IA08d6VkQ" libraries={['places']}>
//           <SearchBox label={<span className="black-bold">Origin</span>} onSelect={handleOriginSelect} />
//           <div className="button-container">
//             <button  className= "btn" onClick={() => setShowWaypointInput(true)}>Add Stop</button>
//           </div>
//           {showWaypointInput && (
//             <SearchBox label={<span className="black-bold">Stop</span>} onSelect={handleAddWaypoint} />
//           )}
//           {waypoints.map((waypoint, index) => (
//             <div key={index} className="waypoint-container">
//               <SearchBox label={<span className="black-bold">Stop {index + 1}</span>} onSelect={(place) => handleAddWaypoint(place, index)} />
//               <div className="button-container"><button  className="btn" onClick={() => handleDeleteWaypoint(index)}>Remove</button></div>
//             </div>
//           ))}
//           <SearchBox label={<span className="black-bold">Destination</span>} onSelect={handleDestinationSelect} />
//           <div className= "show">
//           <div className="transit-mode-container">
//             <label htmlFor="transit-mode">Transit Mode:</label>
//             <select id="transit-mode" value={transitMode} onChange={handleTransitModeChange}>
//               <option value="DRIVING">Driving</option>
//               <option value="BIKe">Bike</option>
//               <option value="WALKING">Walk</option>
//             </select>
//           </div>
//           <div className="button-container"><button className= "btn" onClick={handleCalculate}>Calculate</button></div>
//           </div>
//           {distance !== null && origin && destination && (
//             <p className='result'>
//               Distance: {new Intl.NumberFormat().format(distance)} kms
//               <br />
//               {`The distance between ${origin.label} and ${destination.label} via the selected route is ${new Intl.NumberFormat().format(distance)} kms.`}
//             </p>
//           )}
//           {eta && (
//             <p className='result'>ETA: {formatTime(eta)}</p>
//           )}
//         </LoadScript>
//       </div>
//       <div className="map-container">
//         <LoadScript googleMapsApiKey="AIzaSyA2lKWbyZZcdmlAf9fniS7dR6IA08d6VkQ" libraries={['places']}>
//           <Map
//             origin={origin}
//             destination={destination}
//             waypoints={waypoints}
//             transitMode={transitMode}
//             setDistance={setDistance}
//             setEta={setEta}
//           />
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import Map from './components/Map';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [waypoints, setWaypoints] = useState([]);
  const [distance, setDistance] = useState('');
  const [eta, setEta] = useState(null);
  const [showWaypointInput, setShowWaypointInput] = useState(false);
  const [transitMode, setTransitMode] = useState('DRIVING');

  const handleOriginSelect = (place) => {
    setOrigin({
      location: { lat: place.lat, lng: place.lng },
      label: place.name,
    });
  };

  const handleDestinationSelect = (place) => {
    setDestination({
      location: { lat: place.lat, lng: place.lng },
      label: place.name,
    });
  };

  const handleAddWaypoint = (place) => {
    setWaypoints([...waypoints, { location: { lat: place.lat, lng: place.lng }, stopover: true, label: place.name }]);
    setShowWaypointInput(false); // Hide waypoint input after adding
  };

  const handleDeleteWaypoint = (index) => {
    setWaypoints(waypoints.filter((_, i) => i !== index));
  };

  const handleCalculate = () => {
    if (origin && destination) {
      setDistance(null); // Reset distance before calculation
      setEta(null); // Reset ETA before calculation
    }
  };

  const handleTransitModeChange = (e) => {
    setTransitMode(e.target.value);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hrs ${minutes} mins`;
  };

  return (
    <div className="app">
      <div className="center"><h1>Route Mapper</h1></div>
      <div className="search-container">
        <LoadScript googleMapsApiKey="AIzaSyA2lKWbyZZcdmlAf9fniS7dR6IA08d6VkQ" libraries={['places']}>
          <SearchBox label={<span className="black-bold">Origin</span>} onSelect={handleOriginSelect} />
          <div className="button-container">
            <button className="btn" onClick={() => setShowWaypointInput(true)}>Add Stop</button>
          </div>
          {showWaypointInput && (
            <SearchBox label={<span className="black-bold">Stop</span>} onSelect={handleAddWaypoint} />
          )}
          {waypoints.map((waypoint, index) => (
            <div key={index} className="waypoint-container">
              <SearchBox label={<span className="black-bold">Stop {index + 1}</span>} onSelect={(place) => handleAddWaypoint(place, index)} />
              <div className="button-container"><button className="btn" onClick={() => handleDeleteWaypoint(index)}>Remove</button></div>
            </div>
          ))}
          <SearchBox label={<span className="black-bold">Destination</span>} onSelect={handleDestinationSelect} />
          <div className="show">
            <div className="transit-mode-container">
              <label htmlFor="transit-mode">Transit Mode:</label>
              <select id="transit-mode" value={transitMode} onChange={handleTransitModeChange}>
                <option value="DRIVING">Driving</option>
                <option value="BIKE">Bike</option>
                <option value="WALKING">Walk</option>
              </select>
            </div>
            <div className="button-container"><button className="btn" onClick={handleCalculate}>Calculate</button></div>
          </div>
          {distance !== null && origin && destination && (
            <p className='result'>
            <span className='distance-bold'>Distance:</span> <span className='distance-blue'>{new Intl.NumberFormat().format(distance)} kms</span>
            <br /> <br/>
            {`The distance between`} <span className='distance-bold'>{origin.label}</span> {`and`} <span className='distance-bold'>{destination.label}</span> {`via the selected route is`} <span className='distance-bold'>{new Intl.NumberFormat().format(distance)} kms</span>.
          </p>
          )}
          {eta && (
            <p className='result'><span className='distance-bold'>Estimated time of Arrival</span>: <span className='distance-blue'>{formatTime(eta)}</span></p>
          )}
        </LoadScript>
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyA2lKWbyZZcdmlAf9fniS7dR6IA08d6VkQ" libraries={['places']}>
          <Map
            origin={origin}
            destination={destination}
            waypoints={waypoints}
            transitMode={transitMode}
            setDistance={setDistance}
            setEta={setEta}
          />
        </LoadScript>
      </div>
    </div>
  );
};

export default App;

