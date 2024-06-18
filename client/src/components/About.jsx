import React from 'react'
import './styles/About.scss'
import img from '../assets/img/photo.jpg'
const About = () => {
  return (
    <>
        <div className='about' id='about'>
         <div className='about-heading'>
            <div className='about-heading-container'>
                <h1>ABOUT ME</h1>
            </div>
         </div>
         <div className='about-main'>
            <div className='about-text'>
              <div className='about-text-heading'>
                <h1>WHO I AM?</h1>
              </div>
              <p>
              I'm Anurag Patel, a Full-Stack Web Developer. Currently pursuing a B.Tech in Computer Science at IIIT Una, I specialize in creating responsive web applications using React, Node.js, and MongoDB. With a strong foundation in C, C++, and JavaScript, I have experience in developing web applications using MERN stack. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player. I'm passionate about coding and continuously learning to innovate in the tech world.
              </p>
            </div>
            <div className='about-img'>
                <img src={img} alt='about-img' />
            </div>
         </div>
        </div>
    </>
  )
}

export default About
