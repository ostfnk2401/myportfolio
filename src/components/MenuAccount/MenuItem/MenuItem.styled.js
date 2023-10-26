import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImProfile } from 'react-icons/im';

export const MenuLi = styled.li`
  display: flex;
  margin: 10px auto;
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
  max-width: 100px;
  margin-left: 10px;
  transition: 500ms;
`;
