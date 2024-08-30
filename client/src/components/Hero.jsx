import React from 'react'
import './styles/Hero.scss'
import Typed from 'typed.js';
import img from '../assets/img/header-img.svg'
import { MdDownload } from "react-icons/md";
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import { FaRegCircleRight } from "react-icons/fa6";
const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Developer</i>', '<i>Programmer</i>', '<i>Coding Enthusiast</i>', '<i>Problem Solver</i>'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <div className='hero' id='home'>
        <div className='hero__content'>
          <div className='hero-text'>
            <div className='hero-text-main'>
              <p>Hi, I'm <span>Anurag Patel</span></p>
              <span ref={el} />
            </div>
            <div className='hero-text-tagline'>
              <p>Passionate about building web applications and solving problems.</p>
            </div>
            <div className='hero-buttons'>
              <div className='hero-button-2'>
                <Link to='https://drive.google.com/file/d/1HGvSFXyfjw-qM0onGnVosHUFCw-V2qZi/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <button >
                  Resume
                  <MdDownload />
                </button>
                </Link>
              </div>
              <div className='hero-button-1'>
                <HashLink smooth to='/#contact'>
                <button>
                  Let's Connect
                  <FaRegCircleRight />
                </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <div className='hero__overlay'>
          <div className='animate__animated animate__zoomIn'>
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
