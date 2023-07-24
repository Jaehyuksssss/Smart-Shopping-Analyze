import styled from 'styled-components';
import InputBox from '../components/forms/InputBox';
import SelectCategory from '../components/forms/SelectCategory';
import SubmitButton from '../components/forms/SubmitButton';
import { flex } from '../styles';
import RangePickerComponent from '../components/forms/RangePicker';
import RadioButton from '../components/forms/RadioButton';

export default function FormContainer() {
  return (
    <StyledFormContainer>
      <StyledSelectWrapper>
        <RangePickerComponent />
        <SelectCategory />
        <InputBox />
        <RadioButton />
      </StyledSelectWrapper>
      <StyledSelectWrapper>
        <SelectCategory />
        <RadioButton />
        <RadioButton />
        <SubmitButton />
      </StyledSelectWrapper>
    </StyledFormContainer>
  );
}
export const StyledFormContainer = styled.div`
  ${flex('center', 'center', 'column')}
  margin-top: 3rem;
  gap: 3rem;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
