import { Formik } from 'formik';
import React from 'react';
import {
  EmailIcon,
  NameRegisterIcon,
  PasswordlIcon,
  RegisterBtn,
  RegisterField,
  RegisterForm,
  RegisterLabel,
  RegisterLogin,
  RegisterTitle,
  Registration,
} from './Register.styled';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { register } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values.password !== values.confirmPassword) {
      Notiflix.Notify.failure(' перевірте пароль!');
      return;
    }

    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm();
        Notiflix.Notify.success('success');
      })
      .catch(() => {
        Notiflix.Notify.failure('error');
      });
  };
  return (
    <>
      <Registration>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={handleSubmit}
        >
          <RegisterForm>
            <RegisterLabel>
              <RegisterField
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <NameRegisterIcon />
            </RegisterLabel>
            <RegisterLabel>
              <RegisterField
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <EmailIcon />
            </RegisterLabel>
            <RegisterLabel>
              <RegisterField
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <PasswordlIcon />
            </RegisterLabel>
            <RegisterLabel>
              <RegisterField
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="off"
              />
              <PasswordlIcon />
            </RegisterLabel>
            <RegisterBtn type="submit">Register</RegisterBtn>
          </RegisterForm>
        </Formik>
        <RegisterLogin to="/login">Log In</RegisterLogin>
      </Registration>
    </>
  );
};
