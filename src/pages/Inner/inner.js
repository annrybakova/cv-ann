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
            content={<Info text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut 
            metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. 
            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
            sit amet adipiscing sem neque"/>}
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

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="contact">
          <Address />
        </div>

        <div id="feedback">
            <Box
            title="Feedback"
            content={<Info text={<Feedback data={feedback}/>}/>}
          />
        </div>

        <div>
          <ScrollToTopBtn />
        </div>
      </div>
    </div>
  );
}

export default InnerPage;
