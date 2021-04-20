import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IealuIzoiN1HqPO6p59EkKGO1mP5DHziaKGjq4bc3ZdrtuCN0kr0a8Qzab1afOA3QDQsJPczEvml6V6KFUnCXML00idnAZMEE');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;