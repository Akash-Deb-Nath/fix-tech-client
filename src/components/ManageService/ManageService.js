import React, { useEffect, useState } from 'react';
import ManageServiceDetails from '../ManageServiceDetail/ManageServiceDetail';
import Sidebar from '../Sidebar/Sidebar';


const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <section className="my-5" style={{ backgroundColor: '#1F232B' }}>
                    <div className="text-center mt-5 pt-5">
                        <h1 className="fw-bolder text-white">MANAGE SERVICES</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="w-75 row mt-5">
                            {
                                services.map(service => <ManageServiceDetails service={service} key={service.name}></ManageServiceDetails>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ManageService;