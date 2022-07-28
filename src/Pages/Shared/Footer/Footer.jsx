import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="row text-center footer-part p-4">
            <div className="col-lg-6  col-md-4 col-12">
                <div className="">
                    <h3>Foodbaz</h3>
                    <p className="text-danger"><small>Loyal followers who seek inspiration and advice and can get them first-hand. Healthy food has undoubtedly become not only a trend but a movement. Health-conscious consumers are ready to waste their time on finding healthy products: "free-from", "no added", "all natural" and "organic".Social media is the place, and influencer marketing is a way to market healthy food. </small></p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 link-part">
                <h3>Click link</h3>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/blogs">Blogs</Link>
            </div>
            <div className="col-lg-3  col-md-4 col-12 py-2">
                <h3>My Youtube Channel Link</h3>
                <a href="https://www.facebook.com" target="_blank">Click here to go</a>
            </div>
        </div>
    );
};

export default Footer;