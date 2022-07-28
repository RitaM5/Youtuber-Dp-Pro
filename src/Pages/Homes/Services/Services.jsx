import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="">
            <h1 className='text-center mt-5 services-heading'>Services</h1>
          <div className="row">
          {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
          </div>
            </div>
        </div>
    );
};

export default Services;