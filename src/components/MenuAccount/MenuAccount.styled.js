import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { FiEdit, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

export const MenuContainer = styled.div``;
export const MenuTrigger = styled.div``;
export const AccountIcon = styled(MdAccountCircle)`
  position: absolute;
  top: 8px;
  right: 34px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
`;
export const DropDownMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  background-color: #c9c9c9;
  border-radius: 8px;
  padding: 10px 20px;
  width: 200px;
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    width: 20px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }
  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }
`;
export const MenuTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-weight: 500;
  font-size: 18px;
  color: black;
  line-height: 1.2rem;
`;
export const MenuList = styled.ul``;

export const MenuLi = styled.li`
  display: flex;
  margin: 10px auto;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  &:hover a {
    color: rgb(212, 33, 9);
    cursor: pointer;
  }
  &:hover img {
    cursor: pointer;
    opacity: 1;
  }
`;
export const ProfileIcon = styled(ImProfile)`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 500ms;
`;
export const MenuLink = styled(Link)`
  color: black;
  max-width: 100px;
  margin-left: 10px;
  transition: 500ms;
`;

export const EditIcon = styled(FiEdit)`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 500ms;
`;
export const SettingsIcon = styled(FiSettings)`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 500ms;
`;
export const LogoutIcon = styled(BiLogOut)`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 500ms;
`;
