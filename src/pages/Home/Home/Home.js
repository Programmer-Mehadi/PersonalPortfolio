import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contactme from '../Contactme/Contactme';
import HomeSection from '../HomeSection/HomeSection';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
          
            <HomeSection></HomeSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contactme></Contactme>
           
        </div>
    );
};

export default Home;