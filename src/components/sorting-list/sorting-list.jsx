import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {SortingTypes} from '../../common/const';

const SortingList = (props) => {

  const {activeSorting, onSortingChange} = props;

  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    onSortingChange(evt.target.innerText);
    setOpenedSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openedSorting &&
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortingTypes).map((sortingType, id) => (
          <li className={`places__option ${sortingType === activeSorting ? `places__option--active` : ``}`}
            key={sortingType + id}
            tabIndex={0}
            onClick={handleSortingChange}>{sortingType}</li>
        ))}
      </ul>}
    </form>
  );
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  onSortingChange(selectedSorting) {
    dispatch(ActionCreator.changeSorting(selectedSorting));
  },
});

SortingList.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

export {SortingList};

export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
