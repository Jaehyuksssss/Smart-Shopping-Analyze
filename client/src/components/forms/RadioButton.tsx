import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { RadioButtonProps } from '../../utils/@types';

export default function RadioButton({ options }: RadioButtonProps) {
  const [value, setValue] = useState(options[0].key);

  const radioOptions = options.map(option => ({
    label: option.label,
    value: option.key,
  }));

  return (
    <Radio.Group options={radioOptions} value={value} optionType="button" />
  );
}
