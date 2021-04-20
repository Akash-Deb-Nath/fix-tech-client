import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { ImageURL, serviceName, description, price} = service;
    return (
        <div className="col-md-4 text-center my-5 service-detail-div">
            <img style={{ height: '50px' }} src={ImageURL} alt="" />
            <h5 className="mt-3 mb-3 text-white">{serviceName}</h5>
            <h5 className="mt-3 mb-3 text-white">${price}</h5>
            <p className="text-secondary">{description}</p>
            <Link to={`/book/${serviceName}`}><button className="btn btn-primary">Book Now</button></Link>
        </div>
    );
};

export default ServiceDetail;