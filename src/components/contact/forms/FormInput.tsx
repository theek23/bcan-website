import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormInput = ({ name, ...props }: FormInputProps) => {
  return (
    <input
      {...props}
      name={name}
      className="block w-full px-4 py-3 lg:py-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 transition-colors text-base"
    />
  );
};

export default FormInput;