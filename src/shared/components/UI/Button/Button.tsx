import { FC } from 'react';
import { Button, ButtonProps } from '@radix-ui/themes';

const CustomButton: FC<ButtonProps> = (props) => {
  return (
    <Button className='btn' {...props}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
