import React from 'react';
import {useDispatch} from 'react-redux';
import Place from '../place/place';
import {placesPropTypes} from '../../common/prop-types';
import {getActivePlace} from "../../store/action";

const PlaceList = ({places, placeName}) => {
  const dispatch = useDispatch();

  const setActivePlace = (id) => {
    dispatch(getActivePlace(id));
  };

  const unsetActivePlace = (id) => {
    dispatch(getActivePlace(id));
  };

  return (
    places.map((place) => (
      <Place
        setActivePlace={() => setActivePlace(place.id)}
        unsetActivePlace={() => unsetActivePlace(null)}
        key={place.id}
        place={place}
        placeName={placeName}
      />
    ))
  );
};

PlaceList.propTypes = {
  places: placesPropTypes,
};

export default PlaceList;
