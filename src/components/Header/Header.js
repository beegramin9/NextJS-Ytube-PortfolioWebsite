import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import NavDropDown from './NavDropDown';
import { HeaderContainer, Div1, Span } from './HeaderStyles';

const Header = () =>  {
  /* 만들 hamburger Component에 OnClick으로 handleClickHamburger을 주면 된다.
  document가 없으니, useRef로 가져와서 current.classList.toggle('hamburger-open ') */
  return (
  <HeaderContainer>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color:'rgb(242, 242, 242)', margin:"0 0 20px 1.5rem"}}>
        <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <NavDropDown/>
  </HeaderContainer>
);
};

export default Header;