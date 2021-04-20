import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5055/isAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    console.log(isAdmin);
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4 bg-secondary" style={{ height: "125vh" }}>
            <ul className="list-unstyled">
                { !isAdmin ? 
                <div>
                    <li className="mb-3">
                        <Link to="/book" className="text-white">
                            <span>Book</span>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/bookList" className="text-white">
                            <span>Book List</span>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/addReview" className="text-white">
                            <span>Give Review</span>
                        </Link>
                    </li>
                </div> :
                <div>
                    <li className="mb-3">
                        <Link to="/orderList" className="text-white">
                            <span>Order List</span>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/addService" className="text-white">
                            <span>Add Service</span>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/makeAdmin" className="text-white" >
                            <span>Make Admin</span>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/manageService" className="text-white" >
                            <span>Manage Service</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;