import React from 'react';
import { useHistory } from 'react-router';

const ManageServiceDetails = (props) => {
    const { serviceName, ImageURL, description, price, _id } = props.service;
    const history = useHistory();

    function handleDeleteBtn(id) {
        fetch(`https://polar-beyond-04909.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted")
            })
    }
    return (
        <div className="card col-md-3 p-2 mx-3 my-3">
            <img style={{ height: '100px' }} className="card-img" src={ImageURL} alt="" />
            <div style={{height: '200px'}}>
                <h6 className="card-title">{serviceName}</h6>
                <p>Description: {description}</p>
            </div>
            <p>Price: ${price}</p>
            <button className="btn btn-danger" onClick={() => handleDeleteBtn(_id)}>Delete</button>
        </div>
    );
};

export default ManageServiceDetails;