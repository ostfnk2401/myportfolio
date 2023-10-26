import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { Notify } from 'notiflix';
import { logout } from 'redux/auth/operations';
import { closeModalLogout } from 'redux/globalSlice';
import {
  ButtonWrapper,
  ModalContainer,
  ModalWraper,
  Title,
} from './ModalLog.styled';
import { Button } from 'components/Gallery/Button/Button';

export const ModalLog = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
      .unwrap()
      .then(data => {
        Notify.success(
          `You have successfully logged out. We hope to see you back soon!`
        );
      });
    dispatch(closeModalLogout());
  };

  return (
    <ModalWraper>
      <ModalContainer>
        <Title>{user.username}, are you sure that you want to logout? 🧐</Title>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => dispatch(closeModalLogout())}
            text="Cancel"
            variant={'secondary'}
          />
          <Button type="button" onClick={handleLogOut} text="Yeah, Exit" />
        </ButtonWrapper>
      </ModalContainer>
    </ModalWraper>
  );
};
