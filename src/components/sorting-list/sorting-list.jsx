import React, {useState} from 'react';
import {SortingTypes} from '../../common/const';
import {changeSorting} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';

const SortingList = () => {

  const {activeSorting} = useSelector((state) => state.PLACES);
  const dispatch = useDispatch();

  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    dispatch(changeSorting(evt.target.innerText));
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

export default React.memo(SortingList);
