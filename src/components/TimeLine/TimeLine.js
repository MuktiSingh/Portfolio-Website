import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
        I am a B.Tech graduate in Information Technology with a keen interest in software development, particularly in the area of Data Structures and Algorithms (DSA). As a software development enthusiast, I am passionate about creating efficient and scalable solutions to complex problems.
<br />
<br />

Throughout my academic career, I have gained a solid foundation in C++ programming language, as well as experience with web development technologies such as HTML, CSS, and JavaScript. I have also had the opportunity to work on various software development projects, both individually and in teams, which have helped me develop my problem-solving and collaboration skills.
<br />
<br />

My ultimate goal is to become a software engineer and make a meaningful impact in the tech industry. I am always eager to learn and explore new technologies, and I am constantly seeking opportunities to enhance my skills and knowledge.
<br />
<br />

If you are looking for a motivated and dedicated team member, please feel free to connect with me. I am excited to explore potential collaborations and opportunities with you.
        </SectionText>
    </Section>
  );
};

export default Timeline;
