import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const liList = <>
        <li><a href='/#home'>Home</a></li>
        <li><a href='/#aboutme'>About me</a></li>
        <li ><a href='/#projects'>Projects</a></li>
        <li ><Link to='/blog'>Blog</Link></li>
        <p className='flex items-center'><a href='#contact' className='btn w-full  bg-[#3B3486] px-8 text-white rounded-sm'>Contact</a></p>
    </>
    return (
        <div className='relative z-50 mb-[50px]'>
            <div className="navbar bg-base-100 bg-opacity-90 shadow-sm fixed top-0 ">
                <div className=' max-w-[1440px] w-[98%] mx-auto '>
                    <div className="navbar-start flex-auto">
                        <a className=" font-bold ml-0 pl-0  normal-case text-lg md:text-2xl"><span className='text-[#CB1C8D]'>Muhammad</span> <span className='ml-1 text-[#3B3486]'>Mehadi</span></a>
                    </div>
                    
                    <div className='navbar-end flex-1 w-fit'>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                            {liList}
                        </ul>
                    </div>
                        <div className="dropdown flex justify-end ">
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-14 p-2 bg-base-100 shadow-lg w-52 text-lg font-semibold ml-[-200px] rounded-sm">
                                {liList}
                            </ul>
                            <label tabIndex={0} className="w-fit   btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;