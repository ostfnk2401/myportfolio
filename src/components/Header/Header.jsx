import { Suspense } from 'react';
// import GitHub from './GitHub';
// import {
//   HeaderItem,
//   HeaderLink,
//   HeaderLogo,
//   HeaderLogoBox,
//   HeaderLogoText,
//   HeaderNav,
//   HeaderSection,
//   //   HeaderSocial,
//   //   HeaderSocialLi,
//   //   HeaderSocialLink,
//   Headerlist,
// } from './Header.styled';
// import MyLogo from './MyLogo';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HeaderLi, HeaderUl } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderUl>
        <HeaderLi>
          <NavLink to="/">Header</NavLink>
        </HeaderLi>
        <HeaderLi>
          <Link to="/home">Home</Link>
        </HeaderLi>
        <HeaderLi>
          <Link to="/projects">Projects</Link>
        </HeaderLi>
      </HeaderUl>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
