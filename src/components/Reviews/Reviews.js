import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

    const [reviewDetails, setreviewDetails] = useReviews();

    return (
        <div className='reviews'>
            {
                reviewDetails.map(reviewdetail => (
                    <Review 
                        key={reviewdetail.id} 
                        reviewdetail={reviewdetail}>
                    </Review>
                ))
            }
        </div>
    );
};

export default Reviews;