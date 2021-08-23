import React from 'react';

import { SocialIcons } from '../Header/NavDropDownStyle';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import { motion } from 'framer-motion';
const blinkVarinats = {
  hidden: { 
      opacity: 0, 
  },
  visible: { 
      opacity: 1, 
      transition: { yoyo: Infinity, duration: 1.5}
  },
};


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
          <Slogan>This blog is
            <motion.span
            variants={blinkVarinats}
            initial="hidden"
            animate="visible">
            🔨powered⚡</motion.span>
            with <img src="./icons/nextjs.svg"/>
            <br/>
          ⓒ 2021. All right reserved</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://wontaeblog.space/" style={{color:'rgb(135, 209, 242)'}}>
            <FaBlogger size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/beegramin9" style={{color:'rgb(135, 209, 242)'}}>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/wontae-choi-917259209/" style={{color:'rgb(135, 209, 242)'}}>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/beestron9/" style={{color:'rgb(135, 209, 242)'}}>
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
