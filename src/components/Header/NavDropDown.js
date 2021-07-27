import React, {useState}  from 'react'
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { StyledBurger, RightNav, Div2, Div3, NavLink, SocialIcons } from './NavDropDownStyle';


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
                <NavLink>Technologies</NavLink>
              </Link>
            </li> 
            <li>
              <Link href="#about">
                <NavLink>About</NavLink>
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
          </Div3>
        </RightNav>
      </>
    )
}

export default NavDropDown;
