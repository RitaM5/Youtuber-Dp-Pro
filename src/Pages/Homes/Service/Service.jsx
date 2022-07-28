import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, price, id, img, ratings } = service;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-md-4 col-12 p-5'>
            <div className=" food-card  p-3 rounded">
                <img className="card-img" src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <p>ratings : {ratings}</p>
                <Link to="/checkout" className='bg-dark text-white p-2 rounded' style={{textDecoration:'none'}}>Contact Now</Link>
            </div>
        </div>

    );
};

export default Service;