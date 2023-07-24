import styled from 'styled-components';

export default function SubmitButton() {
  return (
    <StyledButtonWrapper>
      <StyledButton>Submit</StyledButton>
    </StyledButtonWrapper>
  );
}
const StyledButtonWrapper = styled.div`
  width: 80px;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #6c72ff;
  color: #fff;
`;
