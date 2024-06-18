import React from 'react'
import './styles/SkillCard.scss'
const SkillCard = ({key,skill}) => {
  return (
    <>
        <div className='skill-card'>
            <img src={skill.img} alt={skill.name}/>
            <p>{skill.name}</p>
        </div>
    </>
  )
}

export default SkillCard
