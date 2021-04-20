import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://lit-brook-14009.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Make Admin successfully.');
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <div className="mx-5 mt-5 p-5 add-product-field bg-secondary h-50">
                    <h1>Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="email" {...register("email")} />
                        <br />
                        <input type="submit" className="mt-3 btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;