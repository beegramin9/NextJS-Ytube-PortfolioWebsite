import React, {useState}  from 'react'
import Link from 'next/link';
import { StyledBurger, RightNav, Div2, Div3, NavLink, SocialIcons } from './NavDropDownStyle';

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
          <Div2>
            <li>
              <Link href="#projects">
                <NavLink>Projects</NavLink>
              </Link>
            </li>
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
          </Div2>
          <Div3>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <FaBlogger size="3rem"/>
            </SocialIcons>
          </Div3>
        </RightNav>
      </>
    )
}

export default NavDropDown;
