import React from 'react';
import {connect} from 'react-redux';
import Place from '../place/place';
import {placesPropTypes} from '../../common/prop-types';
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";

const PlaceList = (props) => {

  const {places, placeName, setActivePlace, unsetActivePlace} = props;

  return (
    places.map((place) => (
      <Place
        setActivePlace={setActivePlace}
        unsetActivePlace={unsetActivePlace}
        key={place.id}
        place={place}
        placeName={placeName}
      />
    ))
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  setActivePlace(id) {
    dispatch(ActionCreator.getActivePlace(id));
  },
  unsetActivePlace() {
    dispatch(ActionCreator.getActivePlace(null));
  }
});

PlaceList.propTypes = {
  places: placesPropTypes,
  placeName: PropTypes.string.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  unsetActivePlace: PropTypes.func.isRequired
};

export {PlaceList};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
