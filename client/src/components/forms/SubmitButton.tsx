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
  background-color: rgba(108, 114, 255, 0.5); /* 더 옅은 투명도로 배경색 지정 */
  color: #fff;

  &:hover {
    background-color: rgba(74, 79, 255, 0.8); /* 호버 효과에 대한 배경색 변경 */
  }
`;
