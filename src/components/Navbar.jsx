import React from 'react';
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <p className='mx-2 w-10 text-bold lg:text-4xl text-white' >S</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
                <FaSquareXTwitter/>
            </div>
        </nav>
    );
};

export default Navbar;