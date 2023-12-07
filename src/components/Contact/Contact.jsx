import React, { useState } from 'react';
import contactAnimation from '../../../public/animations/contact-us.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { RiMailSendFill } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import email from '../../../public/images/email.png'
import contact from '../../../public/images/contact.png'
import location from '../../../public/images/location.png'
import flowerLogo from '../../../public/logo/flower-logo.png'
import fb from '../../../public/images/fb.png'
import twitter from '../../../public/images/twitter.png'
import linkedIn from '../../../public/images/linkedIn.png'

const Contact = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='mt-56 pt-10'>
            <div className='flex justify-center mt-5'>
                <h1 className='font-bold text-5xl bg-gradient-to-r from-rose-600 via-purple-500 to-rose-400 inline-block text-transparent bg-clip-text'>Contact Us</h1>
            </div>
            <div className="flex justify-center overflow-hidden">
                <div className="my-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="w-[300px] md:w-[400px] flex justify-center items-center border-x-4 border-red-600 rounded-2xl shadow-2xl p-5">
                        <div>
                            <div className="flex items-center space-x-2">
                                <img className="w-[20px]" src={email} alt="" />
                                <p className="text-lg font-semibold">world@flowerstore.com</p>
                            </div>
                            <div className="flex items-center my-3 space-x-2">
                                <img className="w-[20px]" src={contact} alt="" />
                                <p className="text-lg font-semibold">+9009-0808-7878</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img className="w-[20px]" src={location} alt="" />
                                <p className="text-lg font-semibold">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] md:w-[400px] h-[200px] border-x-4 flex justify-center items-center border-red-600 rounded-2xl shadow-2xl p-5">
                        <img className="h-[180px]" src={flowerLogo} alt="" />
                    </div>
                    <div className="w-[300px] md:w-[400px] flex justify-center items-center border-x-4 border-red-600 rounded-2xl shadow-2xl p-5">
                        <div className="flex flex-row items-center justify-center space-x-10">
                            <div className="flex justify-center items-center flex-col">
                                <Link><img className="w-[45px]" src={fb} alt="" /></Link>
                                <p className="text-lg font-bold mt-2 hidden md:block">Facebook</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <Link><img className="w-[45px] rounded-full" src={twitter} alt="" /></Link>
                                <p className="text-lg font-bold mt-2 hidden md:block">Twitter</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <Link><img className="w-[45px]" src={linkedIn} alt="" /></Link>
                                <p className="text-lg font-bold mt-2 hidden md:block">LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-2xl font-bold text-center text-indigo-500'>OR</p>
            <div>
                <div className='flex flex-col items-center md:flex-row md:items-center md:justify-evenly'>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className='w-[280px] md:w-[350px] lg:w-[600px]'>
                        <Lottie animationData={contactAnimation} loop={true} />
                    </div>
                    <div className='w-[300px] md:w-[450px] lg:w-[600px]'>
                        <form>
                            {/* name */}
                            <input type="text" name="name" id="" placeholder='enter Your full name' className='w-full px-2 py-4 rounded-3xl shadow-2xl border-x-4 border-x-blue-600 mb-5' />
                            {/* email */}
                            <input type="email" name="email" id="" placeholder='example@gmail.com' className='w-full px-2 py-4 rounded-3xl shadow-2xl border-x-4 border-x-blue-600 mb-5' />
                            <div className='w-full flex flex-col md:flex-row md:justify-between'>
                                {/* contact number */}
                                <input type="text" name="name" id="" placeholder='enter you contact number' className='w-full md:w-full lg:w-[290px] px-2 py-4 rounded-3xl shadow-2xl border-x-4 border-x-blue-600 mb-5 mr-[20px]' />
                                {/* date from react date picker */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='w-full md:w-full lg:w-[290px] px-2 py-4 rounded-3xl shadow-2xl border-x-4 border-x-blue-600 mb-5' placeholderText='select a date' />
                            </div>
                            <textarea name="text" id="" placeholder='enter you valuable comment or description here' cols="30" rows="5" className='w-full px-2 py-4 rounded-3xl shadow-2xl border-x-4 border-x-blue-600 mb-5'></textarea>
                        </form>
                        <div className='my-4 flex justify-center'>
                            <button className='border-x-4 hover:shadow-2xl hover:shadow-red-400 border-indigo-500 px-7 py-4 text-lg font-bold text-white rounded-tr-3xl rounded-bl-3xl rounded-tl rounded-br bg-gradient-to-r from-slate-600 via-purple-600 to-slate-600'><Link className='flex items-center'><RiMailSendFill className='text-lg font-bold mr-2' /> Send Message</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;