// src/components/SearchBox.js
import React, { useRef, useEffect, useCallback } from 'react';

const SearchBox = ({ label, onSelect }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const handlePlaceChange = useCallback(() => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      onSelect({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        name: place.formatted_address,
      });
    }
  }, [onSelect]);

  useEffect(() => {
    if (!inputRef.current) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
    });

    autocompleteRef.current.addListener('place_changed', handlePlaceChange);
  }, [handlePlaceChange]);

  return (
    <div>
      <label>{label}</label>
      <br></br>
      <input
        ref={inputRef}
        type="text"
        placeholder={`Enter ${label}`}
        style={{ width: '70%', padding: '8px', margin: '8px 3px', backgroundColor: 'white'}}
      />
    </div>
  );
};

export default SearchBox;
