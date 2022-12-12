import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectContext } from '../../../contexts/ProjectProvider';

const Projects = () => {
    const { setProjectId } = useContext(projectContext);

    const [prohectList, setProjectList] = useState(null);

    useEffect(() => {

        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjectList(data))

    }, [])

    return (
        <div className='text-white bg-gradient-to-r from-[#3B3486] via-purple-500 to-[#CB1C8D]'>
            <div id='projects' className='max-w-[1440px] w-[90%] mx-auto  py-10 pt-20'>
                <h2 className='text-center font-bold text-3xl  mb-16'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        prohectList?.map(project =>
                            <div key={project.id} className=' bg-gradient-to-r from-[#3B3486] via-purple-500 to-[#CB1C8D] card text-white shadow-xl rounded-sm flex flex-col gap-4'>
                                <img src={project.img} className='border-b-2 border-black h-[200px]' alt="" />
                                <div className='card-body flex flex-col gap-4 '>
                                    <h2 className='text-xl font-bold'>{project.name}</h2>
                                    {/* <p>{project.overview}
                                </p> */}

                                    <div className='grid grid-cols-2 gap-4 border-white'>
                                        <a href={project.liveLink}  className='btn bg-[#3B3486] rounded-sm border-white'>Live Site</a>
                                        <Link to={`/projects/${project.id}`} onClick={() => setProjectId(project.id)} className='btn bg-[#3B3486] rounded-sm border-white'>View Details</Link>

                                    </div>
                                </div>

                            </div>
                        )
                    }

                    {/* <div className='card bg-base-100 shadow-xl rounded-sm flex flex-col gap-4'>
                    <img src={educourx} className='border-b-2 border-black h-[200px]' alt="" />
                    <div className='card-body flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>Educourx</h2>
                        <p><span className='font-bold'>Overview:</span> Online course related website. User can view course, and also see course by category. Here
                            also implement authentication in login, signup by firebase (email-password, Gmail and GitHub
                            authentication). User can checkout any course (private route).
                            <br />
                            <span className='font-bold'>Technology used:</span> HTML, CSS, JavaScript, React, Express, Firebase, JSON.</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <a href={`https://github.com/Programmer-Mehadi/Educourx-client-side-code`} className='btn bg-[#3B3486]'>Client code</a>
                            <a href={`https://github.com/Programmer-Mehadi/Educourx-server-side-code`} className='btn bg-[#3B3486]'>Sever code</a>
                            <a href={`https://educourx-auth.web.app/`} className='btn bg-[#CB1C8D] col-span-2'>Live site</a>
                        </div>
                    </div>

                </div>

                <div className='card bg-base-100 shadow-xl rounded-sm flex flex-col gap-4'>
                    <img src={musclemaster} className='border-b-2 border-black h-[200px]' alt="" />
                    <div className='card-body flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>MuscleMaster</h2>
                        <p><span className='font-bold'>Overview:</span> Massage center website. Login, signup (Google, email and password), view services, add new
                            services, view single service, add review, edit and update review.
                            <br />
                            <span className='font-bold'>Technology used:</span> HTML, CSS, JavaScript, React, Bootstrap, Express, Firebase, MongoDB, JWT.</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <a href={`https://github.com/Programmer-Mehadi/MuscleMaster-client-code`} className='btn bg-[#3B3486]'>Client code</a>
                            <a href={`https://github.com/Programmer-Mehadi/MuscleMaster-server-code`} className='btn bg-[#3B3486]'>Sever code</a>
                            <a href={`https://muscle-master-14426.web.app/`} className='btn bg-[#CB1C8D] col-span-2'>Live site</a>
                        </div>
                    </div>

                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;