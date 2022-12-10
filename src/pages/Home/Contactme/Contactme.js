import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
const Contactme = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ukmgnz6', 'template_1azw5bf', form.current, 'UwnmRFuOsUqqTJiwB')
          .then((result) => {
              console.log(result.text);
              if(result.text = 'ok'){
                  toast.success('Email send!')
                  e.target.reset();
              }
          }, (error) => {
              console.log(error.text);
          });
    };
    
    return (
        <div id='contact' className='max-w-[1440px] w-[97%] mx-auto my-10'>
            <h2 className='text-center font-bold text-3xl  mb-16 pt-20'>Contact</h2>
            <div className="mb-20">
                <div className=" flex-col lg:flex-row-reverse">                     
                    <div className="max-w-[600px] mx-auto rounded-sm  card flex-shrink-0  shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name='from_name' type="text" placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='from_email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' type="text" placeholder="message" className="pt-1 input input-bordered" />
                            </div>
                             
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#CB1C8D]">Send Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactme;