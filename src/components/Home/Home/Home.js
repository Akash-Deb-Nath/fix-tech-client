import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import CauseForChooseUs from '../CauseForChooseUs/CauseForChooseUs';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Feedback from '../Feedback/Feedback';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Contact></Contact>
            <AboutUs></AboutUs>
            <Services></Services>
            <CauseForChooseUs></CauseForChooseUs>
            <Reviews></Reviews>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;