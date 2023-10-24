import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;
export const MoviesItem = styled.li`
  border-radius: 4px;
  background: rgba(199, 199, 199, 0.18);
  box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
`;
export const MoviesLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
export const MoviesImg = styled.img`
  border-radius: 4px;
`;
export const MoviesTitle = styled.p`
  max-width: 200px;
  color: white;
  font-weight: 700;
  padding: 10px 10px;
  margin: 0;
`;
