import React from 'react';
import Reviews from '../../hooks/Reviews';

const Review = () => {

    const [reviews, setReviews] = Reviews();
    const [id, name, review, rating, picture] = reviews;

    console.log(name);

    return (
        <div>
            <h2>this is review: {reviews.length}</h2>
            <p>this is name: </p>
        </div>
    );
};

export default Review;