import React, { useRef, useEffect } from 'react'
import './styles/ProjectCard.scss'
import { BsGithub } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
const ProjectCard = ({ project, key }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                reverse: false,
                max: 20,
                perspective: 1000,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: 1,
                speed: 400,
                transition: true,
                axis: null,
                glare: true,
                "max-glare": 1,
                "glare-prerender": false,
                "mouse-event-element": null,
                reset: true,
                "reset-to-start": false,
            });
        }

        return () => {
            if (tiltRef.current) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);
    return (
        <>
            <div className='project-card' key={key} ref={tiltRef}>
                <div className='project-card-image'>
                    <img src={project.image} alt={project.title} />
                </div>
                <div className='project-card-info'>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className='project-card-techstack'>
                        {project.techStack.map((tech, index) => (
                            <span key={index}>{`#${tech} `}</span>
                        ))}
                    </div>
                    <div className='links'>
                        <div className='github-links'>
                            <Link to={project.GitHub} target='_blank' rel='noreferrer'>
                                <BsGithub />
                            </Link>
                        </div>
                        {project?.live && 
                            <div className='live-links'>
                                <Link to={project.live} target='_blank' rel='noreferrer'>
                                    <MdOutlineRemoveRedEye/>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
