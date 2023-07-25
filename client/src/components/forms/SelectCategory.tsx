import { Select } from 'antd';
import styled from 'styled-components';
import { SelectCategoryProps } from '../../utils/@types';

export default function SelectCategory({
  options,
  placeholder,
}: SelectCategoryProps) {
  return (
    <StyledSelectWrapper>
      <Select style={{ width: '100%' }} placeholder={placeholder}>
        {options.map(option => (
          <Select.Option key={option.key} value={option.key}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </StyledSelectWrapper>
  );
}

const StyledSelectWrapper = styled.div`
  width: 200px;
`;
