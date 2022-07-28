import React from 'react';
import "./Banner.css";
import banner1 from "../../../../public/images/Food-Vlogger.png";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="row banner-part p-5 align-items-center">
            <div className="col-lg-8 col-md-6 col-12 left-part">
                <h1 className="title-head">FOODBAZ</h1>
                <p>Hello pepople this is Foodbaz vlog page.Youtube food influencers promote not only their opinions on cooking but also their lifestyle – especially when we're talking about healthy food bloggers. From here you can about different types of food tests,price and food quality of different countries that food i tested and created those food content video and let me know.</p>
                <Link to='/about' className="fs-5 about p-1 px-3 rounded">About Me</Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 py-3 right-side">
                <div className="d-flex">
                    <img className=" banner-img" src={banner1} />
                </div>
            </div>
        </div>
    );
};

export default Banner;