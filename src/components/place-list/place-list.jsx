import React, {useState} from 'react';
import Place from "../place/place";
import PropTypes from 'prop-types';

const PlaceList = (props) => {

  const {places} = props;
  const [activePlaceId, getActivePlace] = useState(false);

  const isActivePlace = (place) => place.id === activePlaceId;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <Place
          handleMouseEnter={() => {
            getActivePlace(place.id);
          }}
          handleMouseLeave={() => {
            getActivePlace(null);
          }}
          isActivePlace={isActivePlace(place)}
          key={place.id}
          place={place}/>
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default PlaceList;
