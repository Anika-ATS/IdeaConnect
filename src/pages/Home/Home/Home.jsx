import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Services from '../Services/Services';


//const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Services></Services>
        </div>
    );
};

export default Home;