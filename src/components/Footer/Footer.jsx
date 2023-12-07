import React from 'react';
import logo from '../../../public/logo/fl-logo.png';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import fbIcon from '../../../public/social-media-icons/fb.png'
import ytIcon from '../../../public/social-media-icons/yt-icon.png'
import linkedInIcon from '../../../public/social-media-icons/linkedIn.png'
import twitterIcon from '../../../public/social-media-icons/twitter.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const handleClick = () => {
        toast.warn('This is not ready yet', {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
        });
    };


    return (
        <div className=''>
            <footer className="footer p-10 bg-slate-700 text-white mt-10">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-slate-700 text-white border-base-300">
                <aside className="items-center grid-flow-col">
                    <Link to='/'>
                        <img className='w-[200px]' src={logo} alt="" />
                    </Link>
                    <div className='flex flex-col'>
                        <p>Copyright © {moment().format("YYYY")} - All right reserved</p>
                        <p className='text-sm mt-2'>Site Developed by <span className='text-lg font-semibold'>Slice-Coders BD</span></p>
                    </div>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className='w-[50px] h-[50px] rounded-full tooltip tooltip-info flex items-center' data-tip="Facebook">
                        <Link to='https://www.facebook.com/slice.coders' target='_blank'>
                            <img src={fbIcon} alt="Facebook" />
                        </Link>
                    </div>
                    <div className='w-[45px] h-[45px] rounded-full tooltip tooltip-info flex items-center' data-tip="LinkedIn">
                        <Link to='https://www.linkedin.com/company/slice-coders/' target='_blank'>
                            <img src={linkedInIcon} alt="LinkedIn" />
                        </Link>
                    </div>
                    <div className='w-[45px] h-[45px] rounded-full tooltip tooltip-error flex items-center' data-tip="Youtube" onClick={handleClick}>
                        <Link>
                            <img src={ytIcon} alt="Youtube" />
                        </Link>
                    </div>
                    <div className='w-[45px] h-[45px] tooltip flex items-center' data-tip="Twitter" onClick={handleClick}>
                        <Link>
                            <img className='rounded-full' src={twitterIcon} alt="Twitter" />
                        </Link>
                    </div>
                </nav>
            </footer>
            <ToastContainer />
        </div>

    );
};

export default Footer;