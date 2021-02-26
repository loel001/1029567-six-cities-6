import React, {useState} from 'react';
import Place from '../place/place';
import placesPropTypes from '../../common/prop-types';
import PropTypes from "prop-types";

const PlaceList = (props) => {

  const {places, placeName} = props;
  const [activePlaceId, setActivePlace] = useState(false);

  const isActivePlace = (place) => place.id === activePlaceId;

  return (
    places.map((place) => (
      <Place
        handleMouseEnter={() => {
          setActivePlace(place.id);
        }}
        handleMouseLeave={() => {
          setActivePlace(null);
        }}
        isActivePlace={isActivePlace(place)}
        key={place.id}
        place={place}
        placeName={placeName}
      />
    ))
  );
};

PlaceList.propTypes = {
  places: placesPropTypes,
  placeName: PropTypes.string.isRequired
};

export default PlaceList;
