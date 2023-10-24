import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  HeaderForm,
  HeaderLi,
  HeaderLink,
  HeaderLogLink,
  HeaderLogText,
  HeaderLogin,
  HeaderNav,
  HeaderText,
  HeaderUl,
} from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  return (
    <>
      <HeaderForm>
        <HeaderNav>
          <HeaderUl>
            <HeaderLi>
              <HeaderLink to="/">
                <HeaderText>Home</HeaderText>
              </HeaderLink>
            </HeaderLi>
            {!isLoggedIn ? (
              <></>
            ) : (
              <>
                <HeaderLi>
                  <HeaderLink to="/projects">
                    <HeaderText>Projects</HeaderText>
                  </HeaderLink>
                </HeaderLi>

                <HeaderLi>
                  <HeaderLink to="/gallery">
                    <HeaderText>Gallery</HeaderText>
                  </HeaderLink>
                </HeaderLi>
              </>
            )}
          </HeaderUl>
        </HeaderNav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <HeaderLogin>
            <HeaderLogLink to="/login">
              <HeaderLogText>Login</HeaderLogText>
            </HeaderLogLink>
          </HeaderLogin>
        )}
      </HeaderForm>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
