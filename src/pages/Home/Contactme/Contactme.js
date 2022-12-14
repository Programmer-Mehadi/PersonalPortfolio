import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import img from '../../../assets/Developer_activity.gif';
const Contactme = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ukmgnz6', 'template_1azw5bf', form.current, 'UwnmRFuOsUqqTJiwB')
            .then((result) => {
                console.log(result.text);
                if (result.text = 'ok') {
                    toast.success('Email send!')
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='text-white bg-gradient-to-r from-[#3B3486] via-purple-700 to-[#CB1C8D]'>
            <div id='contact' className='max-w-[1440px] w-[90%] mx-auto py-10'>
                <h2 className='text-center font-bold text-3xl  mb-16 pt-20'>Contact</h2>
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 drop-shadow-md">
                        <div className='w-full mb-10 drop-shadow-md md:drop-shadow-none md:mb-0'>
                            <img src={img} alt="" className='w-full h-full rounded-l-sm' />
                        </div>
                        <div className=" ml-0 rounded-sm  card  shadow-2xl w-full ">
                            <form ref={form} onSubmit={sendEmail} className="card-body text-white bg-gradient-to-r from-[#3B3486]  to-[#CB1C8D] rounded-sm  flex justify-center">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="">Full Name</span>
                                    </label>
                                    <input required name='from_name' type="text" placeholder="full name" className="input input-bordered text-white bg-gradient-to-r from-[#3B3486]  to-[#CB1C8D] border-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Email</span>
                                    </label>
                                    <input required name='from_email' type="email" placeholder="email" className="input input-bordered text-white bg-gradient-to-r from-[#3B3486]  to-[#CB1C8D] border-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Message</span>
                                    </label>
                                    <textarea required name='message' type="text" placeholder="message" className="pt-1 input input-bordered text-white bg-gradient-to-r from-[#3B3486] to-[#CB1C8D] border-white" />
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-[#CB1C8D] text-lg">Send Email <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactme;