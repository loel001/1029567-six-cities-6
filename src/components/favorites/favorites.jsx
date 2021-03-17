import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {placesPropTypes} from "../../common/prop-types";
import FavoritesCity from "./favorites-city";
import Header from "../header/header";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {fetchFavoritePlaceList} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import PropTypes from "prop-types";

const Favorites = (props) => {

  const {favoritesPlaces, isDataFavoriteLoaded, onLoadData} = props;
  useEffect(() => {
    if (!isDataFavoriteLoaded) {
      onLoadData();
    }
  }, [isDataFavoriteLoaded]);

  if (!isDataFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const favoriteCities = Array.from(new Set(favoritesPlaces.map((place) => place.city.name)));

  return (
    <div className={`page ${favoritesPlaces.length > 0 ? `` : `page page--favorites-empty`}`}>
      <Header />
      {favoritesPlaces.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city, index) => {
                  const favoriteCityPlaces = favoritesPlaces.filter((place) => place.city.name === city);
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
  favoritesPlaces: state.favoritesPlaces,
  isDataFavoriteLoaded: state.isDataFavoriteLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoritePlaceList());
  },
});

Favorites.propTypes = {
  favoritesPlaces: placesPropTypes,
  isDataFavoriteLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
