import { FC } from 'react';
import { TextField } from '@radix-ui/themes';
import { CustomInputProps } from './types';

const CustomInput: FC<CustomInputProps> = (props) => {
  return <TextField.Root {...props} className='input' />;
};

export default CustomInput;
