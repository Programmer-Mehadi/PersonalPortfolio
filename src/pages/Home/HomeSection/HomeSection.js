import React from 'react';
import facebook from '../../../assets/facebook.png';
import linkedin from '../../../assets/linkedin.png';
import mehadi from '../../../assets/mehadi.png';
import twitter from '../../../assets/twitter.png';

const HomeSection = () => {
    return (
        <div id='home' className='min-h-[600px] flex justify-center items-center py-14 lg:py-0' >
            <div className='flex flex-col  md:flex-row  gap-8  max-w-[1440px] w-[97%] mx-auto  '>
                <div className='order-2 '>
                    <h4 className='text-center md:text-left text-lg font-semibold'>Hi I'm Muhammad Mehadi</h4>
                    <h1 className='text-center md:text-left text-3xl my-4 font-bold'>I'm <span className='text-[#3B3486]'>Web Developer</span></h1>
                    <p className='text-lg'>As a passionate Web Developer and Javascript Expert. I have experience in HTML, CSS, and JavaScript,React,Expressjs and Mongodb. Combined with my recent projects in full stack web development, I am confident I have the skills to help you.</p>
                    <div className='my-8'>
                        <div className='flex justify-center md:justify-start  gap-4 flex-wrap'>
                            <a href='#projects' className="btn bg-[#3B3486] rounded-[3px] px-8">View Projects</a>
                            <a href="Md Zahirul Islam Mehadi's Resume.pdf" className="btn bg-[#CB1C8D]  text-white border-[#3B3486]  rounded-[3px] hover:text-white px-8">Download RESUME</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 items-center md:items-start'>
                        <h2 className='font-bold'>Find With Me</h2>
                        <div className='social-list flex gap-4'>
                            <a href={`https://www.linkedin.com/in/muhammad-mehadi/`} className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                <img src={linkedin} alt="" />
                            </a>
                            <a href={`https://www.facebook.com/md.mehadi.talukder/`} className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                <img src={facebook} alt="" />
                            </a>
                            <a href={`https://twitter.com/MuhammadMehadi`} className='bg-[#f0eff4] p-2 rounded-[3px]'>
                                <img src={twitter} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className='sm:order-first md:order-last flex justify-center lg:justify-end'>
                    <div className=' rounded-[100%] h-[300px] w-[300px]  lg:h-[400px] lg:w-[400px] border-4 border-[#3B3486]'>
                        <img className=' rounded-[100%] h-[300px] w-[300px]  lg:h-[400px] lg:w-[400px] border-0 border-[#3B3486] mt-[10px]' src={mehadi} alt="" />
                    </div>
                </div>

            </div>
        </div >

    );
};

export default HomeSection;