import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import facebook from '../../../assets/icons/facebook.svg';
import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import twitter from '../../../assets/icons/twitter.svg';
import mehadi from '../../../assets/mehadi.png';

const HomeSection = () => {
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div id='home' className='text-white bg-gradient-to-r from-[#3B3486] via-purple-700 to-[#CB1C8D] min-h-[600px] flex justify-center items-center py-20 lg:py-0 relative' >

            <div className=' bg-purple-800  absolute h-full  w-full z-10 blur-3xl opacity-50'>
            </div>

            <div className='absolute flex flex-col  md:flex-row  gap-20  max-w-[1440px] w-[90%] mx-auto z-30'>
                <div className='order-2 '>
                    <h4 className='text-center md:text-left text-xl font-semibold'>Hi I'm Md Zahirul Islam Mehadi</h4>

                    <h1 className='text-center md:text-left text-3xl my-4 font-bold '>I'm a <span className='md:text-[#CB1C8D] bg-clip-text bg-[#3B3486] text-transparent font-extrabold text-4xl' style={{
                        textShadow: "-1px 0px 0px red,1px 0px 0px red,0px - 1px 0px red,0px 1px 0px red"
                    }}><Typewriter
                            words={['Web Developer', 'React Expert', 'JavaScript Expert']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        /></span></h1>

                    <p className='text-lg text-center md:text-left'>As a passionate Web Developer and Javascript Expert. I have experience in HTML, CSS, and JavaScript, React, Expressjs and Mongodb. Combined with my recent projects in full stack web development, I am confident I have the skills to help you.</p>
                    <div className='my-8'>
                        <div className='flex justify-center md:justify-start  gap-4 flex-wrap'>
                            <a href='#projects' className="btn bg-[#3B3486] rounded-[3px] px-8 border-white text-lg transition ease-in-out delay-150  hover:scale-110 duration-300">View Projects</a>
                            <a href="Md Zahirul Islam Mehadi's Resume.pdf" className="btn bg-[#CB1C8D]  text-white border-[#3B3486]  rounded-[3px] hover:text-white px-8 text-lg flex gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">Download RESUME
                                <div className='animate-bounce'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </div>

                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 items-center md:items-start'>
                        <h2 className='font-bold'>Connect With Me</h2>
                        <div className='social-list flex gap-4'>
                            <a href={`https://www.linkedin.com/in/muhammad-mehadi/`} className='bg-[#f0eff4] p-2 rounded-[3px] h-10 w-10'>
                                <img src={linkedin} alt="" className='' />
                            </a>
                            <a href={`https://www.facebook.com/md.mehadi.talukder/`} className='bg-[#f0eff4] p-2 rounded-[3px] h-10 w-10'>
                                <img src={facebook} alt="" />
                            </a>
                            <a href={`https://twitter.com/MuhammadMehadi`} className='bg-[#f0eff4] p-2 rounded-[3px] h-10 w-10'>
                                <img src={twitter} alt="Twitter" className='' />
                            </a>
                            <a href={`https://github.com/Programmer-Mehadi`} className='bg-[#f0eff4] p-2 rounded-[3px] h-10 w-10'>
                                <img src={github} alt="" />
                            </a>

                        </div>

                    </div>
                </div>
                <div className='sm:order-first md:order-last flex justify-center lg:justify-end'>
                    <div className='shadow-lg rounded-[100%] md:h-[250px] md:w-[250px]  h-[300px] w-[300px]  lg:h-[400px] lg:w-[400px]'>
                        <img className='shadow-lg rounded-[100%] h-full w-full  lg:h-[400px] lg:w-[400px] border-0 border-[#3B3486] ' src={mehadi} alt="" />
                    </div>
                </div>

            </div>
        </div >

    );
};

export default HomeSection;