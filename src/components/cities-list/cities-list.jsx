import React from 'react';
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {CIIES} from '../../common/const';

const CitiesList = (props) => {

  const {activeCity, onCityClick} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityClick(evt.target.textContent);
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

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.changeCity(selectedCity));
  },
});

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
