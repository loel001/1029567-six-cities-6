import React from 'react';
import Place from "../place/place";
import PropTypes from 'prop-types';

const PlaceList = (props) => {

  const {places} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place, index) => (
        <Place key={index} place={place}/>
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
