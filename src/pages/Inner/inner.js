import React from 'react';
import Box from '../../components/Box';
import Expertise from '../../components/Expertise/experience';
import Skills from '../../components/Expertise/skills';
import TimeLine from '../../components/TimeLine';
import Feedback from '../../components/Feedback';
import Info from '../../components/Info';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Panel from '../../components/Panel';
import ScrollToTopBtn from '../../components/Button/btn-up';
import '../../assets/styles/inner.css'

import expertise from '../../components/Expertise/expertise.json';
import feedback from '../../components/Feedback/feedback.json';

function InnerPage() {
  return (
    <div className="inner">
      
      <Panel />
      
      <div className='content'>
        <div id="aboutMe">
        <Box 
          title="About me" 
          content={
            <Info text={
              <>
                Enthusiastic Junior QA Engineer and Front-End Developer with a solid understanding of backend technologies. Known for my ability to learn rapidly and work effectively both independently and within team environments. 
                <br />
                Holder of both Bachelor's and Master's degrees.
                <br />
                Proficient in English, with full professional and conversational proficiency.
              </>
            }/>
          }
        />
        </div>

        <div id="education">
          <Box 
            title="Education" 
            content={<Info text={<TimeLine />}/>}
          />
        </div>
        
        <div id="experience">
          <Box 
            title="Experience"
            content={<Info text={<Expertise data={expertise} />}/>}
          />
        </div>

        <div id="skills">
          <Box 
            title="Skills"
            content={<Info text={<Skills />}/>}
          />
        </div>

        {/* <div id="portfolio">
          <Portfolio />
        </div> */}

        <div id="contact">
          <Address />
        </div>

        <div id="feedback">
            <Box
            title="Feedback"
            content={<Info text={<Feedback data={feedback}/>}/>}
          />
        </div>
        <ScrollToTopBtn />
      </div>
    </div>
  );
}

export default InnerPage;
