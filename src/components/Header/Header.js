import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import NavDropDown from './NavDropDown';
import { Container, Div1, Span } from './HeaderStyles';

const Header = () =>  {
  /* 만들 hamburger Component에 OnClick으로 handleClickHamburger을 주면 된다.
  document가 없으니, useRef로 가져와서 current.classList.toggle('hamburger-open ') */
  return (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color:'rgb(242, 242, 242)', margin:"0 0 20px 2rem"}}>
        <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <NavDropDown/>
    
    
  </Container>
);
};

export default Header;