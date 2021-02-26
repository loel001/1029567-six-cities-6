import React from 'react';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types';
import Place from "../place/place";

const FavoritesCity = (props) => {

  const {places, city, placeName} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => (
          <Place
            key={place.id}
            place={place}
            placeName={placeName}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  places: placesPropTypes,
  city: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired
};

export default FavoritesCity;
