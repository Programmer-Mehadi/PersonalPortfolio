import React from 'react';

const AboutMe = () => {

    return (
        <div className='max-w-[1440px] w-[97%] mx-auto py-20' id='aboutme'>
            <h2 className='text-center font-bold text-3xl  mb-16'>About Me</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center'>
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl my-4 font-bold'>Hello, I'm <span className='text-[#CB1C8D]'>Mehadi</span></h2>
                    <p className='text-xl'>A Full Stack Web Developer with experience building web applications. Strong creative and
                        analytical skills. Passionate about building first-class web applications. Developed an e-commerce
                        website , To-do list website, etc. Interest to explore new technologies. Proven ability in optimizing
                        web functionalities that improve data retrieval and workflow efficiencies.</p>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <video width="100%" height="240" controls autoPlay>
                        <source src="video.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;