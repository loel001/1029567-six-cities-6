import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from "../review-list/review-list";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchPropertyReviews} from '../../store/api-actions';
import {AuthorizationStatus} from "../../common/const";
import {resetIsReviewsLoaded} from '../../store/action';
import PropTypes from 'prop-types';


const ReviewWrapper = ({placeId}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const {isReviewsLoaded, propertyReviews} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isReviewsLoaded) {
      dispatch(fetchPropertyReviews(placeId));
    }
    return () => dispatch(resetIsReviewsLoaded());
  }, [placeId]);

  if (!isReviewsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {propertyReviews.length}
        </span>
      </h2>
      {
        (propertyReviews.length > 0)
        && <ReviewList reviews={propertyReviews} />
      }
      {
        authorizationStatus === AuthorizationStatus.AUTH && <ReviewForm placeId={placeId} />
      }
    </section>
  );
};

ReviewWrapper.propTypes = {
  placeId: PropTypes.number.isRequired
};

export default ReviewWrapper;
