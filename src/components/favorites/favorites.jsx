import React from 'react';
import {placesPropTypes} from "../../common/prop-types";
import FavoritesCity from "./favorites-city";
import Header from "../header/header";

const Favorites = (props) => {

  const {places} = props;
  const favoritePlaces = places.filter((place) => place.isFavorite);

  const cities = [];
  places.forEach((place) => cities.push(place.city.name));
  const favoriteCities = Array.from(new Set(cities));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city, index) => {
                const favoriteCityPlaces = favoritePlaces.filter((place) => place.city.name === city);
                return (
                  <FavoritesCity
                    key={city + index}
                    places={favoriteCityPlaces}
                    city={city}
                    placeName="FAVORITES"
                  />
                );
              })}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  places: placesPropTypes
};

export default Favorites;
