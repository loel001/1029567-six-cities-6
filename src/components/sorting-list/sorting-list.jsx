import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {SORTING_TYPES} from '../../common/const';

const SortingList = (props) => {

  const {activeSorting, onSortingClick} = props;

  const handleSortingChange = (evt) => {
    evt.preventDefault();
    onSortingClick(evt.target.textContent);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_TYPES.map((sortingType, id) => (
          <li className={`places__option ${sortingType === activeSorting ? `places__option--active` : ``}`}
            key={sortingType + id}
            tabIndex={0}
            onClick={handleSortingChange}>{sortingType}</li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  onSortingClick(selectedSorting) {
    dispatch(ActionCreator.changeSorting(selectedSorting));
  }
});

SortingList.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired
};

export {SortingList};

export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
