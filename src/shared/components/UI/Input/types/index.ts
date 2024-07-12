import { TextField } from '@radix-ui/themes';

export interface CustomInputProps extends React.ComponentProps<typeof TextField.Root> {
  className?: string;
}
