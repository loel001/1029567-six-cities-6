import React from 'react';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types';
import FavoritePlace from "../favorite-place/favorite-place";

const FavoritesCity = (props) => {

  const {places, city} = props;

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
          <FavoritePlace
            key={place.id}
            place={place}/>
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  places: placesPropTypes,
  city: PropTypes.string.isRequired
};

export default FavoritesCity;
