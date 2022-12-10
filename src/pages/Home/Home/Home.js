import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Contactme from '../Contactme/Contactme';
import HomeSection from '../HomeSection/HomeSection';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeSection></HomeSection>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contactme></Contactme>
        </div>
    );
};

export default Home;