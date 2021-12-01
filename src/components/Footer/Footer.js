import React from 'react';
import { AiFillGithub, AiFillGooglePlusSquare, AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+919135841702">9135841702</LinkItem>

          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:muktisingh913@gmail.com">muktisingh913@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com/muktisingh" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/muktisingh/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:muktisingh913@gmail.com" target="_blank">
        <AiFillGooglePlusSquare size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
          <Slogan>Made with ❤️ by Mukti</Slogan>

    </FooterWrapper>
    
  );
};

export default Footer;
