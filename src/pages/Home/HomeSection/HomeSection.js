import React from 'react';
import facebook from '../../../assets/facebook.png';
import linkedin from '../../../assets/linkedin.png';
import mehadi from '../../../assets/mehadi.png';
import twitter from '../../../assets/twitter.png';

const HomeSection = () => {
    return (
        <div id='home' className='min-h-[600px] flex justify-center items-center py-8 lg:py-0' >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8  max-w-[1440px] w-[97%] mx-auto '>
                <div>
                    <h4 className='text-lg font-semibold'>Hi I'm Muhammad Mehadi</h4>
                    <h1 className='text-3xl my-4 font-bold'>I'm <span className='text-[#3B3486]'>Web Developer</span></h1>
                    <p className='text-lg'>As a passionate Web Developer and Javascript Expert. I have experience in HTML, CSS, and JavaScript,React,Expressjs and Mongodb. Combined with my recent projects in full stack web development, I am confident I have the skills to help you.</p>
                    <div className='my-8'>
                        <div className='flex gap-4 flex-wrap'>
                            <button className="btn bg-[#3B3486] rounded-[3px] px-8">View Projects</button>
                            <a href="Md Zahirul Islam Mehadi's Resume.pdf" className="btn bg-[#CB1C8D]  text-white border-[#3B3486]  rounded-[3px] hover:text-white px-8">Download RESUME</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='grid grid-cols-1 gap-6'>
                            <h2 className='font-bold'>Find With Me</h2>
                            <div className='social-list flex gap-4'>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={linkedin} alt="" />
                                </div>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={facebook} alt="" />
                                </div>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={twitter} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <div className='grid grid-cols-1 gap-6'>
                            <h2 className='font-bold'>Best Skill On</h2>
                            <div className='social-list flex gap-4'>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={linkedin} alt="" />
                                </div>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={facebook} alt="" />
                                </div>
                                <div className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                    <img src={twitter} alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='flex justify-center lg:justify-end'>
                    <div className=' rounded-[100%] h-[300px] w-[300px]  md:h-[400px] md:w-[400px] border-4 border-[#3B3486]'>
                        <img className=' rounded-[100%] h-[300px] w-[300px]  md:h-[400px] md:w-[400px] border-0 border-[#3B3486] mt-[10px]' src={mehadi} alt="" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomeSection;