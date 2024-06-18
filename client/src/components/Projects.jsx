import React from 'react'
import './styles/Projects.scss'
import projects from '../utils/projects'
import ProjectCard from './subcomponents/ProjectCard'
const Projects = () => {
  return (
     <>
        <div className='project' id='projects'>
           <div className='project-heading'>
                <h1>Projects</h1>
           </div>
           <div className='projects'>
              {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
           </div>
        </div>
     </>
  )
}

export default Projects
