import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  title?: string;
}

const FormContainer = ({ children, title }: FormContainerProps) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default FormContainer;