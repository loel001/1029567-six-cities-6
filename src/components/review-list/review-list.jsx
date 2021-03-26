import React from 'react';
import Review from '../review/review';
import {reviewsPropTypes} from '../../common/prop-types';

const ReviewList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <Review
          key={index}
          review={review}
        />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: reviewsPropTypes,
};

export default React.memo(ReviewList);
