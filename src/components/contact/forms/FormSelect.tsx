import React from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: { value: string; label: string; }[];
}

const FormSelect = ({ name, options, ...props }: FormSelectProps) => {
  return (
    <select
      {...props}
      name={name}
      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 transition-colors"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;