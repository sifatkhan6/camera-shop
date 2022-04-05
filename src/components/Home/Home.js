import React from 'react';
import './Home.css'
import Image from '../../images/image3.jpg'
import useReviews from '../../hooks/useReviews';
import Blog from '../Blog/Blog';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviewDetails, setreviewDetails] = useReviews();

    return (
        <div className='home'>
            <section className='homeSection'>
                <div className='homeSectinoDiv1'>
                    <h1>This Camera is only for Borolox People. Goribz stay away...</h1>
                    <p>Do you have ajaira money? Ok, then buy expensive camera, travel whole world and do showoff. Stay away from girls.</p>
                </div>
                <div>
                <img src={Image} alt="" />
                </div>
            </section>

            <section className='reviewPart'>
                {
                    reviewDetails.slice(0, 3).map(reviewdetail => (
                        <Review 
                            key={reviewdetail.id} 
                            reviewdetail={reviewdetail}>
                        </Review>
                    ))
                }
            </section>
            <div>
                <Link to={"/reviews"}><button className='btn'>See More</button></Link>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Home;