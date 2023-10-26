import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { BiSolidUserRectangle } from 'react-icons/bi';

export const Registration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
  width: 400px;
  border-radius: 10px;
  padding: 40px 20px;
  background: rgba(199, 199, 199, 0.18);
`;
export const RegisterTitle = styled.h1`
  margin: 0 0 40px;
`;
export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const RegisterField = styled(Field)`
  border: none;
  width: 250px;
  height: 100%;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: transparent;
`;
export const RegisterLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const RegisterBtn = styled.button`
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

export const RegisterLogin = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 250px;
  padding: 16px 24px;
  border: none;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  font-weight: 700;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    background: linear-gradient(
      97deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
  }
`;
export const EmailIcon = styled(IoMdMail)`
  height: 20px;
  width: 20px;

  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: -25px;
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
  left: -25px;
  top: 45%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
export const NameRegisterIcon = styled(BiSolidUserRectangle)`
  height: 20px;
  width: 20px;
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: -25px;
  top: 45%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
