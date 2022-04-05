import React from 'react';
import './Review.css'

const Review = ({reviewdetail}) => {

    const {id, name, picture, dsc, rating} = reviewdetail;

    return (
        <div className='review'>
            <h3>{name}</h3>
            <p>{dsc}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;