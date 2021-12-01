import React from 'react';
import { DiBackbone, DiCode, DiCompass, DiCssTricks, DiFirebase, DiGit, DiMootools, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>Working Knowledge</SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <ListParagraph>Proficient in C++</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCssTricks size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with HTML, CSS, JavaScript, Bootstrap,<br/> ReactJS (Beginner)</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCompass size="3rem" />
        <ListContainer>
          <ListTitle>CS Subjects</ListTitle>
          <ListParagraph>Data Structure & Algorithm<br/>
            OOPs in C++,&nbsp;DBMS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>MySQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBackbone size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Git, Github</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>


  </Section>
);

export default Technologies;
