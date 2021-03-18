import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from "../review-list/review-list";
import LoadingScreen from "../loading-screen/loading-screen";
import {reviewsPropTypes} from '../../common/prop-types';
import {fetchPropertyReviews} from '../../store/api-actions';
import {AuthorizationStatus} from "../../common/const";
import {ActionCreator} from "../../store/action";


const ReviewWrapper = (props) => {
  const {
    authorizationStatus,
    placeId,
    loadReviews,
    isReviewsLoaded,
    propertyReviews,
    resetIsReviewsLoaded
  } = props;

  useEffect(() => {
    if (!isReviewsLoaded) {
      loadReviews(placeId);
    }
    return () => resetIsReviewsLoaded();
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
  authorizationStatus: PropTypes.string.isRequired,
  placeId: PropTypes.string.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
  propertyReviews: reviewsPropTypes,
  resetIsReviewsLoaded: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isReviewsLoaded: state.isReviewsLoaded,
  propertyReviews: state.propertyReviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(fetchPropertyReviews(id));
  },
  resetIsReviewsLoaded() {
    dispatch(ActionCreator.resetIsReviewsLoaded());
  },
});

export {ReviewWrapper};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewWrapper);
