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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useRangePicker } from '../../hooks/useRangePicker';
import { useSelectCategory } from '../../hooks/useSelectCategory';
import { setAge, setDevice, setInput } from '../../redux/slices/shoppingslice';

export default function FormContainer() {
  const { rangePickerValue, setRangePicker } = useRangePicker();
  const { categoryValue, setCategoryValue } = useSelectCategory();

  const dispatch = useDispatch();

  const shoppingValue = useSelector((state: RootState) => state.shopping.value);

  const { age, category, device, gender, input, timeunit } = shoppingValue;
  console.log(shoppingValue);
  return (
    <StyledFormContainer>
      <StyledSelectWrapper>
        <RangePickerComponent
          value={rangePickerValue}
          onChange={setRangePicker}
        />
        <SelectCategory
          onChange={setCategoryValue}
          options={CATEGORY_LIST}
          placeholder={CATEGORY}
          isMultiple={false}
        />
        <InputBox
          value={shoppingValue.input}
          onChange={values => dispatch(setInput(values))}
        />
        <RadioButton
          options={TIME_UNIT_OPTIONS}
          onChange={value => dispatch(setDevice(value))}
        />
      </StyledSelectWrapper>
      <StyledSelectWrapper>
        <SelectCategory
          onChange={values => dispatch(setAge(values))}
          options={AGE_OPTIONS}
          placeholder={DEFAULT_AGE}
          isMultiple={true}
        />
        <RadioButton
          options={GENDER_OPTIONS}
          onChange={value => dispatch(setDevice(value))}
        />
        <RadioButton
          options={DEVICE_OPTIONS}
          onChange={value => dispatch(setDevice(value))}
        />
        <SubmitButton />
      </StyledSelectWrapper>
    </StyledFormContainer>
  );
}
