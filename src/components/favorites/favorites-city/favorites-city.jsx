import React from 'react';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../../common/prop-types';
import Place from "../../place/place";
import {Link} from 'react-router-dom';
import {AppRoute} from "../../../common/const";

const FavoritesCity = (props) => {

  const {places, city, placeName} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.MAIN} className="locations__item-link" href="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places" data-testid="favorites-places">
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
