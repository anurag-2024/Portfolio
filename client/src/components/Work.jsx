import React from 'react'
import './styles/Work.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import work from '../utils/work';

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='work-header'>
        <h1>Work Experience.</h1>
      </div>
      <div>
        <VerticalTimeline>
          {
            work.map((work, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#232631",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={work.date} 
                iconStyle={{ background: "#383E56" }}
                icon={
                  <div className="icon-container">
                    <img
                      src={work.icon}
                      alt={work.company}
                      className="icon"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-company">
                    {work.company}
                  </p>
                </div>
                <ul className="work-description">
                  {work.description.map((desc, index) => (
                    <li key={index}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Work;
