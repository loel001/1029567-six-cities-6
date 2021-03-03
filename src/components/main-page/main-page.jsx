import React, {useEffect} from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {placesPropTypes} from '../../common/prop-types';
import PlaceList from '../place-list/place-list';
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import PropTypes from "prop-types";
import MainEmptyPage from '../main-empty-page/main-empty-page';
import Header from "../header/header";
import SortingList from "../sorting-list/sorting-list";

const MainPage = (props) => {

  const {places, activeCity, onMainPageRender} = props;

  useEffect(() => {
    onMainPageRender();
  }, [activeCity]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${places.length > 0 ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {places.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{places.length} places to stay in {activeCity}</b>
                <SortingList />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceList placeName="MAIN"/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map />
                </section>
              </div>
            </div>
            : <MainEmptyPage activeCity={activeCity}/>
          }
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  places: state.places,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onMainPageRender() {
    dispatch(ActionCreator.getPlaces());
  },
});

MainPage.propTypes = {
  places: placesPropTypes,
  activeCity: PropTypes.string.isRequired,
  onMainPageRender: PropTypes.func.isRequired
};

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
