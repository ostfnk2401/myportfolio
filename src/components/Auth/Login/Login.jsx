import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';
import {
  EmailIcon,
  LoginBox,
  LoginBtn,
  LoginDiv,
  LoginField,
  LoginForm,
  LoginLink,
  LoginText,
  LoginTitle,
  LoginWrapper2,
  LoginWrapper1,
  PasswordlIcon,
} from './Login.styled';
import { usePasswordToggle } from 'hooks/usePasswordToggle';
import { TogglePasswordIcon } from '../TogglePasswordVisibility/TogglePasswordVisibility';

export const Login = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <>
      <LoginBox>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <LoginForm>
            <LoginTitle>Login</LoginTitle>
            <LoginWrapper1>
              <LoginField
                type="email"
                id="email"
                name="email"
                title="Enter the password more difficult, letter, digit, capital letter."
                placeholder="Email"
                autoComplete="off"
                required
              />
              <EmailIcon />
            </LoginWrapper1>
            <LoginWrapper1>
              <LoginWrapper2>
                <LoginField
                  type={showPasswords.password1 ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                <PasswordlIcon />
              </LoginWrapper2>
              <TogglePasswordIcon
                showPassword={showPasswords.password1}
                onToggle={() => togglePasswordVisibility('password1')}
              />
            </LoginWrapper1>

            <LoginBtn type="submit">Login</LoginBtn>
            <LoginDiv>
              <LoginText>Don't have an account?</LoginText>
              <LoginLink to="/register">Sign Up</LoginLink>
            </LoginDiv>
          </LoginForm>
        </Formik>
      </LoginBox>
    </>
  );
};
