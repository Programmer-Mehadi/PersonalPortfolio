import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import projects from '../../assets/projects.json';
const Project = () => {

    const { id } = useLoaderData();
    console.log(id);
    const [project, setProject] = useState({});
    const data = projects;
    useEffect(() => {
        data.map(p => {
            if (p.id == id) {
                setProject(p)
            }
        })
    }, [])
    console.log(project);

    return (
        <div className='mt-[100px] flex flex-col gap-6 max-w-[1440px] w-[97%] mx-auto my-10'>

            <h2 className='text-center font-bold text-2xl text-[#CB1C8D]'>{project.name}</h2>
            <img className='max-w-[800px] mx-auto w-[90%] border shadow-lg' src={project.img} alt="" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                <img className='border shadow-lg h-[300px]' src={project.img1} alt="" />
                <img className='border shadow-lg h-[300px]' src={project.img2} alt="" />
                <img className='border shadow-lg h-[300px]' src={project.img3} alt="" />
            </div>
            <p className='max-w-[800px] mx-auto w-[90%]'><span className='font-bold text-lg'>Overview:</span> {project.overview}</p>
            <p className='max-w-[800px] mx-auto w-[90%]'><span className='font-bold text-lg'>TechnologyUsed:</span> {project.technologyUsed}</p>
            <div className='flex flex-wrap gap-4  mx-auto justify-center py-10'>
                <a href={project.clientLink} className='btn bg-[#3B3486] rounded-sm'>Client code</a>
                <a href={project.serverLink} className='btn bg-[#3B3486] rounded-sm'>Sever code</a>
                <a href={project.liveLink} className='btn bg-[#CB1C8D] rounded-sm'>Live site</a>
            </div>

        </div>
    );
};

export default Project;