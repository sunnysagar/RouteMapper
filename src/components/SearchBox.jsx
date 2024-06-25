import React, { useRef, useEffect, useCallback } from 'react';
import './style.css';

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
      <input className="input-field"
        ref={inputRef}
        type="text"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default SearchBox;
