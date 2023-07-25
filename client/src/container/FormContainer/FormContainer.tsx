import InputBox from '../../components/forms/InputBox';
import SelectCategory from '../../components/forms/SelectCategory';
import SubmitButton from '../../components/forms/SubmitButton';
import RangePickerComponent from '../../components/forms/RangePicker';
import RadioButton from '../../components/forms/RadioButton';
import {
  StyledFormContainer,
  StyledSelectWrapper,
} from './StyledFormContainer';
import {
  AGE_OPTIONS,
  CATEGORY,
  CATEGORY_LIST,
  DEFAULT_AGE,
  DEVICE_OPTIONS,
  GENDER_OPTIONS,
  TIME_UNIT_OPTIONS,
} from '../../utils/constants';

export default function FormContainer() {
  return (
    <StyledFormContainer>
      <StyledSelectWrapper>
        <RangePickerComponent />
        <SelectCategory options={CATEGORY_LIST} placeholder={CATEGORY} />
        <InputBox />
        <RadioButton options={TIME_UNIT_OPTIONS} />
      </StyledSelectWrapper>
      <StyledSelectWrapper>
        <SelectCategory options={AGE_OPTIONS} placeholder={DEFAULT_AGE} />
        <RadioButton options={GENDER_OPTIONS} />
        <RadioButton options={DEVICE_OPTIONS} />
        <SubmitButton />
      </StyledSelectWrapper>
    </StyledFormContainer>
  );
}
