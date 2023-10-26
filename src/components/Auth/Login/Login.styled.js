import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
  width: 400px;
  border-radius: 10px;
  padding: 40px 20px;
  background: rgba(199, 199, 199, 0.18);
`;
export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LoginTitle = styled.h1`
  margin: 0 0 40px;
  color: white;
  text-align: center;
`;
export const LoginWrapper = styled.div``;
export const LoginLabel = styled.label``;
export const LoginBtn = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  color: white;
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
export const LoginField = styled(Field)`
  border: none;
  width: 250px;
  height: 100%;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: transparent;
  &::placeholder {
    color: #747676;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &.active {
    color: #f581fe;
  }
`;
export const LoginDiv = styled.div`
  display: flex;
  gap: 5px;
`;
export const LoginText = styled.p`
  color: white;
  margin: 0;
  font-weight: 500;
`;
