import React from 'react';
import {connect} from 'react-redux';
import {placesPropTypes} from "../../common/prop-types";
import FavoritesCity from "./favorites-city";
import Header from "../header/header";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";

const Favorites = (props) => {

  const {places} = props;
  const favoritePlaces = places.filter((place) => place.isFavorite);

  const cities = [];
  places.forEach((place) => cities.push(place.city.name));
  const favoriteCities = Array.from(new Set(cities));

  return (
    <div className={`page ${favoritePlaces.length > 0 ? `` : `page page--favorites-empty`}`}>
      <Header />
      {favoritePlaces.length > 0 ?
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
        : <FavoritesEmpty />
      }
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  places: state.places
});

Favorites.propTypes = {
  places: placesPropTypes
};

export {Favorites};

export default connect(mapStateToProps, null)(Favorites);
