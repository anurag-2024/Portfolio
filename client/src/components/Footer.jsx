import React from 'react'
import './styles/Footer.scss'
import logo from '../assets/img/logo.png'
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom'
const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <>
        <div className='footer'>
            <div className='footer__container'>
            <div className='footer-left'>
                <img src={logo} alt='Anurag Patel' />
            </div>
            <div className='footer-right'>
                <div className='footer-right-top'>
                <div className='connections'>
                            <div className='connections-item'>
                                <Link to='https://github.com/anurag-2024' target="_blank" rel="noopener noreferrer">
                                    <BsGithub />
                                </Link>
                            </div>
                            <div className='connections-item'>
                                <Link to='https://www.linkedin.com/in/anurag-patel-7a9a58257/' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <div className='connections-item'>
                                <Link to='https://leetcode.com/u/anurag_patel2420/' target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode />
                                </Link>
                            </div>
                        </div>
                </div>
                <div className='footer-right-bottom'>
                &copy; {year} All Rights Reserved.
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer
