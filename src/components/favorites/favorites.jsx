import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesCity from "./favorites-city";
import Header from "../header/header";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {fetchFavoritePlaceList} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";

const Favorites = () => {
  const dispatch = useDispatch();
  const {isDataFavoriteLoaded, favoritesPlaces} = useSelector((state) => state.DATA);

  useEffect(() => {
    if (!isDataFavoriteLoaded) {
      dispatch(fetchFavoritePlaceList());
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
        <main className="page__main page__main--favorites" data-testid="favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list" data-testid="favorites-list">
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

export default Favorites;
