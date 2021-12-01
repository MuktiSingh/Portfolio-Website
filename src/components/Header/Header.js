import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGooglePlusSquare, AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <i size="3rem" /> <Span>Home</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/muktisingh" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/muktisingh/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:muktisingh913@gmail.com" target="_blank">
        <AiFillGooglePlusSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
