import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5055/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your successfully give a review.');
                }
            })
    };
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <div className="mx-5 p-5 bg-warning w-50 text-center">
                    <h1 className="text-white">Book</h1>
                        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="mt-3 text-white">Name</h5>
                            <input name="name" id="name" defaultValue={loggedInUser.name} {...register("name")} />
                            <br />

                            <h5 className="mt-3 text-white">Email</h5>
                            <input type="email" name="email" id="email" defaultValue={loggedInUser.email} {...register("email")} />
                            <br />

                            <h5 className="mt-3 text-white">Service Name</h5>
                            <input name="serviceName" id="serviceName" defaultValue="Service Name" {...register("serviceName")} />
                            <br />

                            <h5 className="mt-3 text-white">Review</h5>
                            <input name="review" id="review" defaultValue="review"  {...register("review")} />
                            <br />

                            <h5 className="mt-3 text-white">Rating</h5>
                            <input name="rating" id="rating" defaultValue="5"  {...register("rating")} />
                            <br />

                            <input type="submit" className="mt-3 btn btn-primary" />
                        </form>
                    </div>
            </div>
        </div>
    )
};

export default AddReview;