import styled from 'styled-components';

export const ButtonClass = styled.button`
  display: inline-block;
  margin: 0 auto;
  width: 200px;
  padding: 16px 24px;
  border: none;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  font-weight: 700;
  font-size: 16px;
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
