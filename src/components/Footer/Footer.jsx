import React from 'react';
import logo from '../../../public/logo/fl-logo.png';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import fbIcon from '../../../public/social-media-icons/fb.png'
import ytIcon from '../../../public/social-media-icons/yt-icon.png'
import linkedInIcon from '../../../public/social-media-icons/linkedIn.png'
import twitterIcon from '../../../public/social-media-icons/twitter.png'

const Footer = () => {
    return (
        <footer className="footer items-center justify-evenly p-4 bg-teal-200 text-black mt-10">
            <aside className="items-center grid-flow-col">
                <Link to='/'>
                    <img className='w-[200px]' src={logo} alt="" />
                </Link>
                <p>Copyright © {moment().format("YYYY")} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div className='w-[50px] h-[50px] rounded-full tooltip tooltip-info flex items-center' data-tip="Facebook">
                    <Link>
                        <img src={fbIcon} alt="Facebook" />
                    </Link>
                </div>
                <div className='w-[45px] h-[45px] rounded-full tooltip tooltip-error flex items-center' data-tip="Youtube">
                    <Link>
                        <img src={ytIcon} alt="Youtube" />
                    </Link>
                </div>
                <div className='w-[45px] h-[45px] rounded-full tooltip tooltip-info flex items-center' data-tip="LinkedIn">
                    <Link>
                        <img src={linkedInIcon} alt="LinkedIn" />
                    </Link>
                </div>
                <div className='w-[45px] h-[45px] tooltip flex items-center' data-tip="Twitter">
                    <Link>
                        <img className='rounded-full' src={twitterIcon} alt="Twitter" />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;