import { ChangeEventHandler } from 'react';

import styles from '../styles/';

const { textField, animateTransforms } = styles;

export const TextField = ({
  label,
  placeholder,
  name,
  value,
  pattern,
  handler,
  type = 'text',
  disabled = false,
  required = false,
}: TextFieldProps) => {
  return (
    <div className='flex flex-col w-full'>
      {label && <label className='text-gray-500'>{label}</label>}
      <input
        className={textField + animateTransforms}
        placeholder={placeholder}
        pattern={pattern}
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={handler}
        disabled={disabled}
      />
    </div>
  );
};

interface TextFieldProps {
  name: string;
  value: string | number;
  type?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLInputElement>;
}
