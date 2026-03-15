import React, { useState, useRef } from 'react'
import './styles/Skills.scss'
import Marquee from "react-fast-marquee";
import SkillCard from './subcomponents/SkillCard';
import skilldata from '../utils/skills';
const Skills = () => {
    const [play, setPlay] = useState(true);
    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        setPlay(false);
    };

    const handleMouseLeave = () => {
        setPlay(true);
    };
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
                <div className='skills-carousel'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={marqueeRef}
                >
                    <Marquee gradient={true} speed={60} pauseOnHover={false} play={play}>
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
