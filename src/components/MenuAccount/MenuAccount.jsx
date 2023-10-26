import React, { useEffect, useRef, useState } from 'react';
import {
  AccountIcon,
  DropDownMenu,
  EditIcon,
  LogoutIcon,
  MenuContainer,
  MenuLi,
  MenuLink,
  MenuList,
  MenuTitle,
  MenuTrigger,
  ProfileIcon,
  SettingsIcon,
} from './MenuAccount.styled';
// import { logout } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const MenuAccount = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  let menuRef = useRef();
  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  if (!isLoggedIn) {
    return null;
  }

  return (
    <MenuContainer ref={menuRef}>
      <MenuTrigger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AccountIcon></AccountIcon>
      </MenuTrigger>

      <DropDownMenu className={open ? 'active' : 'inactive'}>
        <MenuTitle>{user.name}</MenuTitle>
        <MenuList>
          <MenuLi>
            <ProfileIcon></ProfileIcon>
            <MenuLink>My Profile</MenuLink>
          </MenuLi>
          <MenuLi>
            <EditIcon></EditIcon>
            <MenuLink>Edit Profile</MenuLink>
          </MenuLi>
          <MenuLi>
            <SettingsIcon></SettingsIcon>
            <MenuLink>Settings</MenuLink>
          </MenuLi>
          <MenuLi>
            <LogoutIcon></LogoutIcon>
            <MenuLink onClick={() => dispatch(logout())}>Logout</MenuLink>
          </MenuLi>
        </MenuList>
      </DropDownMenu>
    </MenuContainer>
  );
};
