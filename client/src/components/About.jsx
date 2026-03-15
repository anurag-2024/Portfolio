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
             I’m Anurag Patel, a Computer Science undergraduate at IIIT Una passionate about building scalable web applications and backend systems. I have hands-on experience working on production systems during my internship at CloudSEK, where I built an internal Event Lifecycle Tool used by engineering and customer teams to trace events and debug production issues. I enjoy designing APIs, improving system reliability, and solving real-world engineering problems using technologies like Node.js, PostgreSQL, MongoDB, Redis, and modern JavaScript frameworks, while continuously learning and growing as a software engineer.
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
