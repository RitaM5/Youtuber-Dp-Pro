import React from 'react';
import Banner from "../Banner/Banner"
import Details from '../Details/Explain';
import Services from "../Services/Services"

const Home = () => {
    return (
        <div className="">
         <Banner></Banner>
         <Services ></Services>
         <Details></Details>
        </div>
    );
};

export default Home;