import React from 'react'
import './styles/Skills.scss'
import Marquee from "react-fast-marquee";
import SkillCard from './subcomponents/SkillCard';
import skilldata from '../utils/skills';
const Skills = () => {
    return (
        <>
            <div className='skills' id='skills'>
                <div className='skills-main'>
                    <div className='skills-heading'>
                        <h2>
                            Skills
                        </h2>
                    </div>
                </div>
                <div className='skills-carousel'>
                    <Marquee gradient={true} speed={60} pauseOnClick pauseOnHover>
                        {skilldata.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Skills
