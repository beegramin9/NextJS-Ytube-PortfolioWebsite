import React, {useState}  from 'react'
import Link from 'next/link';
import { StyledBurger, RightNav, AnchorTagsWrapper, SocialIconsWrapper, NavLink, SocialIcons } from './NavDropDownStyle';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

function NavDropDown() {
    const [ open, setOpen ] = useState(false);

    const handleClickHamburger = () => {
          setOpen(!open);
    };

    return (
        <>
        <StyledBurger open={open} onClick={handleClickHamburger}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <RightNav open={open}>
          <AnchorTagsWrapper>
            <li>
              <Link href="#blog">
                <NavLink>Blog</NavLink>
              </Link>
            </li>
            {/* <li>
              <Link href="#projects">
                <NavLink>Projects</NavLink>
              </Link>
            </li> */}
            <li>
              <Link href="#tech">
                <NavLink>Techs</NavLink>
              </Link>
            </li> 
            <li>
              <Link href="#about">
                <NavLink>About</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <NavLink>Contact</NavLink>
              </Link>
            </li>
          </AnchorTagsWrapper>
          <SocialIconsWrapper>
            <SocialIcons href="https://wontaeblog.space/">
              <FaBlogger size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://github.com/beegramin9/">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/wontae-choi-917259209/">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/beestron9/">
              <AiFillInstagram size="3rem"/>
            </SocialIcons>
          </SocialIconsWrapper>
        </RightNav>
      </>
    )
}

export default NavDropDown;
