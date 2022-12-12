import React from 'react';

import css from '../../../assets/icons/css.svg';
import firebase from '../../../assets/icons/firebase.svg';
import git from '../../../assets/icons/git.svg';
import html from '../../../assets/icons/Html.svg';
import js from '../../../assets/icons/js.svg';
import mongodb from '../../../assets/icons/mongodb.svg';
import nodejs from '../../../assets/icons/nodejs.svg';
import react from '../../../assets/icons/react.svg';

const Skills = () => {
    return (
        <div className='text-white bg-gradient-to-r from-[#3B3486] via-purple-500 to-[#CB1C8D]'>
            <div className='max-w-[1440px] w-[90%] mx-auto py-20' id='aboutme'>
                <h2 className='text-center font-bold text-3xl  pb-20'>Skills</h2>

                <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={css} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={html} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={js} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={react} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={nodejs} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={mongodb} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={firebase} alt="" />
                    <img className='shadow-lg h-[100px]  md:h-[130px]  w-[130px] bg-slate-100 p-4 rounded-sm' src={git} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Skills;