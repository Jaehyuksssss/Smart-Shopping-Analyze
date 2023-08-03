import styled, { css } from 'styled-components';
import { SubmitProps } from '../../utils/@types';

export default function SubmitButton({ onSubmit }: SubmitProps) {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={onSubmit}>Submit</StyledButton>
    </StyledButtonWrapper>
  );
}

const StyledButtonWrapper = styled.div`
  width: 70px;
  height: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(108, 114, 255, 0.8);
  color: #fff;

  &:hover {
    background-color: #4a4fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
