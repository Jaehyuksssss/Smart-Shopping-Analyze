import InputBox from '../../components/forms/InputBox';
import SelectCategory from '../../components/forms/SelectCategory';
import SubmitButton from '../../components/forms/SubmitButton';
import RangePickerComponent from '../../components/forms/RangePicker';
import RadioButton from '../../components/forms/RadioButton';
import {
  StyledFormContainer,
  StyledSelectWrapper,
} from './StyledFormContainer';
import { AGE_OPTIONS, CATEGORY_LIST } from '../../utils/constants';

export default function FormContainer() {
  return (
    <StyledFormContainer>
      <StyledSelectWrapper>
        <RangePickerComponent />
        <SelectCategory options={CATEGORY_LIST} />
        <InputBox />
        <RadioButton />
      </StyledSelectWrapper>
      <StyledSelectWrapper>
        <SelectCategory options={AGE_OPTIONS} />
        <RadioButton />
        <RadioButton />
        <SubmitButton />
      </StyledSelectWrapper>
    </StyledFormContainer>
  );
}
