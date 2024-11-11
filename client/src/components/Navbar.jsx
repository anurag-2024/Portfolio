import React, { useEffect, useState } from 'react'
import './styles/Navbar.scss'
import logo from '../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { VscThreeBars } from "react-icons/vsc";
import { SiCodechef } from "react-icons/si";
const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const [menuName, setmenuName] = useState("Home");
    const [width, setwidth] = useState(window.scrollY);
    const [isScrolling, setisScrolling] = useState(false);
    const handlemenuName = (e) => {
        setmenuName(e.target.name);
    }
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', () => {
            setwidth(window.scrollY);
        })
        return () => {
            window.removeEventListener('scroll', () => {
                setwidth(window.scrollY);
            })
        }
    }, [width])
    const handleScroll = () => {
        if (width > 10) {
            setisScrolling(true);
        } else {
            setisScrolling(false);
        }
    }
    return (
        <>
            <nav className={isScrolling?'navbar scroll':'navbar'}>
                <div className="navbar__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {window.innerWidth < 448 ?  <div className='three-menu'><VscThreeBars onClick={() => setmenu(!menu)} /></div> : null}
                {!menu&& <>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <HashLink smooth to={'/#home'} name="Home" className={menuName === "Home" ? "navbar__link selected" : "navbar__link"} onClick={(e) => handlemenuName(e)}>Home</HashLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink smooth to={'/#skills'} name="Skills" className={menuName === "Skills" ? "navbar__link selected" : "navbar__link"} onClick={(e) => handlemenuName(e)}>Skills</HashLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink smooth to={'/#about'} name="About" className={menuName === "About" ? "navbar__link selected" : "navbar__link"} onClick={(e) => handlemenuName(e)}>About</HashLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink smooth to={'/#work'} name="Work" className={menuName === "Work" ? "navbar__link selected" : "navbar__link"} onClick={(e) => handlemenuName(e)}>Work</HashLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink smooth to={'/#projects'} name="Projects" className={menuName === "Projects" ? "navbar__link selected" : "navbar__link"} onClick={(e) => handlemenuName(e)}>Projects</HashLink>
                        </li>
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
                            <div className='connections-item'>
                                <Link to='https://www.codechef.com/users/anurag_p2024' target="_blank" rel="noopener noreferrer">
                                    <SiCodechef />
                                </Link>
                            </div>
                        </div>
                    </ul>
                    <HashLink smooth to={'/#contact'}>
                    <button className="navbar__toggle">
                        Let's Connect
                    </button>
                    </HashLink>
                </>}
            </nav>
        </>
    )
}

export default Navbar
