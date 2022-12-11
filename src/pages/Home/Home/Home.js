import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Contactme from '../Contactme/Contactme';
import HomeSection from '../HomeSection/HomeSection';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeSection></HomeSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contactme></Contactme>
            <Footer></Footer>
        </div>
    );
};

export default Home;