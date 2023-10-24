import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';
import {
  LoginBox,
  LoginBtn,
  LoginDiv,
  LoginField,
  LoginForm,
  LoginLink,
  LoginText,
  LoginTitle,
  LoginWrapper,
} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <LoginBox>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <LoginWrapper>
            <LoginField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </LoginWrapper>
          <LoginWrapper>
            <LoginField
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </LoginWrapper>
          <LoginBtn type="submit">Login</LoginBtn>
          <LoginDiv>
            <LoginText>Don't have an account?</LoginText>
            <LoginLink to="/register">Registration</LoginLink>
          </LoginDiv>
        </LoginForm>
      </Formik>
    </LoginBox>
  );
};
