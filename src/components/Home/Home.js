import React from 'react';
import './Home.css'
import Image from '../../images/image3.jpg'
import useReviews from '../../hooks/useReviews';
import Blog from '../Blog/Blog';

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
            <Blog></Blog>
        </div>
    );
};

export default Home;