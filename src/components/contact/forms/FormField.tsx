import React from 'react';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className="mb-6">
      <label className="block text-base font-medium text-gray-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormField;