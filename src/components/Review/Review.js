import React from 'react';
import './Review.css'

const Review = ({reviewdetail}) => {

    const {id, name, picture, dsc, rating} = reviewdetail;

    return (
        <div className='review'>
            <h4>Name: {name}</h4>
            <p>Review: {dsc}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;