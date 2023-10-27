import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderForm = styled.header`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav`
  display: flex;
`;

export const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

export const HeaderLi = styled.li`
  margin: 0;
  padding: 20px 0;
  cursor: pointer;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #039dfc;
  }
`;

export const HeaderText = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;
export const HeaderLogin = styled.div`
  margin: 0;
  padding: 20px 0;
  cursor: pointer;
`;

export const HeaderLogLink = styled(NavLink)`
  text-decoration: none;
`;
export const HeaderLogText = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  color: #fff;
  &:hover {
    color: #039dfc;
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 100px;
  align-items: center;
`;
