import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    const { serviceName } = useParams();
    console.log(serviceName);


    const onSubmit = data => {
        setShippingData(data);
    };
    console.log(shippingData);


    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            ...loggedInUser,
            shipment: shippingData,
            paymentId
        }
        console.log(bookDetails);
        fetch('http://lit-brook-14009.herokuapp.com/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully.');
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <div className="mx-5 p-5 bg-warning w-50 text-center">
                    <h1 className="text-white">Book</h1>
                    <div style={{ display: shippingData ? 'none' : 'block' }}>
                        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="mt-3 text-white">Name</h5>
                            <input name="name" id="name" defaultValue={loggedInUser.name} {...register("name")} />
                            <br />

                            <h5 className="mt-3 text-white">Email</h5>
                            <input type="email" name="email" id="email" defaultValue={loggedInUser.email} {...register("email")} />
                            <br />

                            <h5 className="mt-3 text-white">Service Name</h5>
                            <input name="serviceName" id="serviceName" defaultValue={serviceName}  {...register("serviceName")} />
                            <br />

                            <input type="submit" className="mt-3 btn btn-primary" />
                        </form>
                    </div>
                    <div style={{ display: shippingData ? 'block' : 'none' }}>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Book;