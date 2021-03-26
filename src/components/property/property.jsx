import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MAX_PROPERTY_IMAGES, MAX_NUMBER_PIN} from '../../common/const';
import {getNumberStarts} from '../../common/utils';
import ReviewWrapper from '../review-wrapper/review-wrapper';
import Map from "../map/map";
import PlaceList from "../place-list/place-list";
import Header from "../header/header";
import {fetchNearPlaces, fetchProperty} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadingScreen from "../loading-screen/loading-screen";
import ButtonIsFavorite from "../button-is-favorite/button-is-favorite";

const Property = () => {
  const dispatch = useDispatch();
  let {id} = useParams();

  const {isInfoLoaded, isNearbyLoaded, currentProperty, nearPlaces} = useSelector((state) => state.DATA);

  useEffect(() => {
    dispatch(fetchProperty(id));
    dispatch(fetchNearPlaces(id));
  }, [id, isNearbyLoaded, isInfoLoaded]);

  if (!(isInfoLoaded) && !(isNearbyLoaded)) {
    return (
      <LoadingScreen />
    );
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
    isFavorite,
    city
  } = currentProperty;

  const renderIsPremium = () => {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_PROPERTY_IMAGES).map((image, index) => {
                return (
                  <div className="property__image-wrapper" key={`${image}-${index}`}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? renderIsPremium() : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <ButtonIsFavorite nameButton={`PROPERTY`} isFavorite={isFavorite} id={id}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: getNumberStarts(rating),
                  }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, ind) => (
                    <li key={`${good}-${ind}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewWrapper placeId={id}/>
            </div>
          </div>
          <section className="property__map map">
            <Map activeCity={city.name} places={nearPlaces.slice(0, MAX_NUMBER_PIN)} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceList places={nearPlaces.slice(0, MAX_NUMBER_PIN)} placeName="NEAR" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


export default Property;
