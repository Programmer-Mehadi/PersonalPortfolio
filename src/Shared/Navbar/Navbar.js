import React from 'react';

const Navbar = () => {
    const liList = <>
          <li><a>Home</a></li>
          <li><a>About me</a></li>
          <li><a>Projects</a></li>
          <li><a className='bg-[#3B3486] px-8 text-white'>Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                          {liList}
                             
                        </ul>
                    </div>
                    <a className="btn font-bold  btn-ghost normal-case text-2xl">Muhammad <span className='ml-1 text-[#3B3486]'>Mehadi</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                         {liList}
                    </ul>
                </div>
                 
            </div>
        </div>
    );
};

export default Navbar;