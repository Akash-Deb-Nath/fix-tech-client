import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [state, setState] = useState({
        serviceName: "",
        description: "",
        price: ""
    });
    const onSubmit = (event) => {
        const eventData = {
            ...state,
            ImageURL: imageURL,
        }
        const url = `http://localhost:5055/addService`;
        console.log(eventData);
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert("Service is added");
            })
    }
    const handleInputBlur = (event) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'f4553f022206a2d036ea15fbfd192c18');
        imageData.append('image', event.target.files[0]);
        console.log(event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <div className="mx-5 p-5 bg-secondary w-50 text-center">
                    <h1 className="text-white">Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="mt-3 text-white">Service Name</h5>
                        <input name="serviceName" id="serviceName" {...register("serviceName")} onBlur={handleInputBlur} />
                        <br />

                        <h5 className="mt-3 text-white">Description</h5>
                        <input name="description" id="description" onBlur={handleInputBlur} />
                        <br />

                        <h5 className="mt-3 text-white">Price</h5>
                        <input name="price" id="price" onBlur={handleInputBlur} />
                        <br />

                        <h5 className="mt-3 text-white">Image</h5>
                        <input className="btn btn-warning" type="file" onChange={handleImgUpload} />
                        <br />

                        <input type="submit" className="mt-3 btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;