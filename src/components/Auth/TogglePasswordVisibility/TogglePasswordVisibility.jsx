import PropTypes from 'prop-types';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PasswordlIconLook } from '../Login/Login.styled';

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <PasswordlIconLook>
      {showPassword ? (
        <FaEye onClick={onToggle} size={20} />
      ) : (
        <FaEyeSlash onClick={onToggle} size={20} />
      )}
    </PasswordlIconLook>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
