import React,  { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import { Table } from 'react-bootstrap';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://lit-brook-14009.herokuapp.com/bookList?email=' + loggedInUser.email)
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
                                    <td>Pending</td>
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