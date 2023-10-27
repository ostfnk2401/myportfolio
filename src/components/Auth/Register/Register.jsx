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
import { usePasswordToggle } from 'hooks/usePasswordToggle';
import { TogglePasswordIcon } from '../TogglePasswordVisibility/TogglePasswordVisibility';

export const Register = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values.password !== values.confirmPassword) {
      Notiflix.Notify.failure('Check your password!');
      return;
    }

    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm();
        Notiflix.Notify.success('Success');
      })
      .catch(() => {
        Notiflix.Notify.failure('Error');
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
                placeholder="Name"
              />
              <NameRegisterIcon />
            </RegisterLabel>
            <RegisterLabel>
              <RegisterField
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
              />
              <EmailIcon />
            </RegisterLabel>
            <RegisterLabel>
              <RegisterField
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
              />
              <TogglePasswordIcon
                showPassword={showPasswords.password1}
                onToggle={() => togglePasswordVisibility('password1')}
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
              <TogglePasswordIcon
                showPassword={showPasswords.password2}
                onToggle={() => togglePasswordVisibility('password2')}
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
