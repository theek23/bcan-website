import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="w-full">
      {children}
    </div>
  );
};

export default FormContainer;