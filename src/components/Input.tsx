import { FC, HTMLProps, useId } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
}

export const Input: FC<InputProps> = ({ type, name, label, ...props }) => {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className="label"
    >
      {label}
      <input
        type={type}
        className="input"
        name={name}
        id={id}
        {...props}
      />
    </label>
  );
};
