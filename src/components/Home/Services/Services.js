import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://lit-brook-14009.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="my-5" style={{ backgroundColor: '#1F232B' }}>
            <div className="text-center mt-5 pt-5">
                <h1 className="fw-bolder text-white">SERVICES</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;