import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CIIES} from '../../common/const';
import {changeCity} from '../../store/action';

const CitiesList = () => {
  const dispatch = useDispatch();
  const {activeCity} = useSelector((state) => state.PLACES);

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.textContent));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CIIES.map((city, index) => {
          return (
            <li className="locations__item" key={city + index} onClick={handleCityClick}>
              <a
                className={
                  `locations__item-link tabs__item
                  ${(city === activeCity) ? `tabs__item--active` : ``}`
                }
              >
                <span>{city}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default CitiesList;
