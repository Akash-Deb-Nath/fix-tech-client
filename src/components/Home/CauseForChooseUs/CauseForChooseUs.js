import React from 'react';
import CauseForChooseUsImg from '../../../images/blaz-erzetic-rP30_20fDpw-unsplash.jpg'

const CauseForChooseUs = () => {
    return (
        <div className="row mx-auto my-5">
            <div className="col-md-5 my-auto mx-5">
                <h1>About Us</h1>
                <p className="text-secondary">
                    The highly-trained technicians have many years of experience with all laptop, notebook, macbook and desktop computer repairs. We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, Imac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.
                 </p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" style={{ borderRadius: '10px' }} src={CauseForChooseUsImg} alt="" />
            </div>
        </div>
    );
};

export default CauseForChooseUs;