import React from 'react';

const Contactme = () => {
    return (
        <div id='contact' className='max-w-[1440px] w-[97%] mx-auto my-10'>
            <h2 className='text-center font-bold text-3xl  mb-16 pt-20'>Contact</h2>
            <div className="">
                <div className=" flex-col lg:flex-row-reverse">                     
                    <div className="max-w-[600px] mx-auto rounded-sm  card flex-shrink-0  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" placeholder="message" className="pt-1 input input-bordered" />
                            </div>
                             
                            <div className="form-control mt-6">
                                <button className="btn bg-[#CB1C8D]">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactme;