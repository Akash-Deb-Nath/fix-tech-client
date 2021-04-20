import React from 'react';

const Review = ({ reviews }) => {
    const { name, email, serviceName, review, rating } = reviews;
    return (
        <div style={{border: '1px solid gray'}} className="col-md-4 bg-light p-5">
            <h6>Reviewer: {name}</h6>
            <h3 className="text-dark">Service Name: {serviceName}</h3>
            <p>{review}</p>
            <h5 style={{fontSize: '30px'}} className="text-danger fw-bolder">Rating: {rating}</h5>
        </div>
    );
};

export default Review;