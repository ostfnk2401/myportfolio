import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdMail, IoMdLock } from 'react-icons/io';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
  width: 380px;
  border-radius: 10px;
  padding: 60px 0;
  background: rgba(199, 199, 199, 0.12);
  box-shadow: 0px 0px 15px 8px rgba(255, 255, 255, 0.36);
`;
export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const LoginTitle = styled.h1`
  margin: 0 0 40px;
  color: white;
  text-align: center;
`;
export const LoginWrapper1 = styled.div`
  position: relative;
`;
export const LoginLabel = styled.label``;
export const LoginBtn = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 83px;
  width: 100%;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin-top: 14px;
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
    scale: 1.02;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
`;
export const LoginField = styled(Field)`
  border: none;
  width: 250px;
  height: 30px;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding-left: 24px;
  transition: all 0.2s ease;

  outline: none;
  border: none;
  border-bottom: 2px solid grey;

  background-color: transparent;
  &::placeholder {
    color: #747676;
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid grey;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #039dfc;
  &:hover,
  &.active {
    color: #f581fe;
    scale: 1.02;
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
export const EmailIcon = styled(IoMdMail)`
  height: 20px;
  width: 20px;

  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 0;
  top: 45%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
export const PasswordlIcon = styled(IoMdLock)`
  height: 20px;
  width: 20px;
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 0;
  top: 36%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
export const PasswordlIconLook = styled.div`
  height: 24px;
  width: 24px;
  color: grey;
  position: absolute;
  right: 0;
  top: 16%;
  cursor: pointer;
`;

export const LoginWrapper2 = styled.div`
  position: relative;
`;
