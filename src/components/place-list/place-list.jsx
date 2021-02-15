import React, {useState} from 'react';
import Place from '../place/place';
import placesPropTypes from '../../common/prop-types';

const PlaceList = (props) => {

  const {places} = props;
  const [activePlaceId, setActivePlace] = useState(false);

  const isActivePlace = (place) => place.id === activePlaceId;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <Place
          handleMouseEnter={() => {
            setActivePlace(place.id);
          }}
          handleMouseLeave={() => {
            setActivePlace(null);
          }}
          isActivePlace={isActivePlace(place)}
          key={place.id}
          place={place}/>
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  places: placesPropTypes
};

export default PlaceList;
