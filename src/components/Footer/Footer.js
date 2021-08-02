import React from 'react';

import { SocialIcons } from '../Header/NavDropDownStyle';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>Call
          <LinkItem href="tel:+82)10-7753-8276">+82)10-7753-8276</LinkItem>
        </LinkColumn>
        {/* <LinkColumn>Email
          <LinkItem href="mailto:wontae.choi@inha.edu">mailto:wontae.choi@inha.edu</LinkItem>
        </LinkColumn> */}
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com" style={{color:'rgb(135, 209, 242)'}}>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com" style={{color:'rgb(135, 209, 242)'}}>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com" style={{color:'rgb(135, 209, 242)'}}>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com" style={{color:'rgb(135, 209, 242)'}}>
          <FaBlogger size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
