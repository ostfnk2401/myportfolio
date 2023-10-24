import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderLi, HeaderLink, HeaderNav, HeaderUl } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  return (
    <>
      <Header>
        <HeaderNav>
          <HeaderUl>
            <HeaderLi>
              <NavLink to="/">
                <HeaderLink>Home</HeaderLink>
              </NavLink>
            </HeaderLi>
            {!isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/login">
                    <p>Login</p>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/projects">
                    <p>Projects</p>
                  </NavLink>
                </li>
              </>
            )}
          </HeaderUl>
        </HeaderNav>
        {isLoggedIn && <UserMenu />}
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
