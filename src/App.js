import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from "./components/Book/Book";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import AddService from "./components/AddService/AddService";
import ManageService from "./components/ManageService/ManageService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import OrderList from "./components/OrderList/OrderList";
import BookList from "./components/BookList/BookList";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Shared/NavBar/NavBar";
import AddReview from "./components/AddReview/AddReview";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/book/:serviceName">
            <Book></Book>
          </PrivateRoute>
          <Route path="/book">
            <Book></Book>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/bookList">
            <BookList></BookList>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
