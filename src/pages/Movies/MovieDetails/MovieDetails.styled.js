import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
`;

export const MovieBtn = styled.button`
  display: inline-block;

  width: 68px;

  border: none;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  font-weight: 500;
  font-size: 14px;
  margin-top: 30px;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: linear-gradient(
      97deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
`;

export const MovieImage = styled.img`
  margin-bottom: 20px;
`;

export const MovieHeader = styled.h1`
  color: white;
`;
export const MovieUl = styled.ul``;
export const MovieLi = styled.li``;

export const MovieLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: #ffc727;
  }
`;
