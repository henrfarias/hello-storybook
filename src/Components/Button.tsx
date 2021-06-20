import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { colors } from '../shared/styles';

import ButtonProps from '../interfaces/IButton';

import styled from 'styled-components';

const StyledButton = styled(ButtonBase)`
  &&{
    border-radius: 10px;
  }
`;

const MyButton: React.FC<ButtonProps> = ({ children, label }) => {
  return (
    <StyledButton >
      {label}
    </StyledButton>
  );
}

export default MyButton;
