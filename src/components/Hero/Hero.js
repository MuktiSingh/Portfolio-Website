import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       <br/>
        Hello 👋. < br />
        I'm Mukti Singh
     </SectionTitle>
     <SectionText>
      Responsible and highly adaptable individual with a knack for coding and problem solving.
     </SectionText>
     <a /*href='mukti_resume.pdf' download="Mukti's_resume.pdf"*/></a>
     {/* <Button href="">Contact </Button></a> */}
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    <br/>
     <br/>
     <br/>
     <br/>
   </LeftSection>
 </Section>
);

export default Hero;


