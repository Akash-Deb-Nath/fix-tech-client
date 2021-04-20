import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Table } from 'react-bootstrap';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/orderList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.shipment.serviceName}</td>
                                    <td><span className="btn btn-primary mr-1">Ongoing</span><span className="btn btn-danger mr-1">Pending</span><span className="btn btn-success mr-1">Done</span></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default OrderList;