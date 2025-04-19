import React from 'react';

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const FormTextArea = ({ name, ...props }: FormTextAreaProps) => {
  return (
    <textarea
      {...props}
      name={name}
      className="block w-full px-4 py-3 lg:py-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 transition-colors resize-none text-base"
    />
  );
};

export default FormTextArea;