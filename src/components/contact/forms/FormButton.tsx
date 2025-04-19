import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  isLoading?: boolean;
  loadingText?: string;
}

const FormButton = ({ 
  children, 
  icon: Icon, 
  isLoading, 
  loadingText = 'Submitting...',
  ...props 
}: FormButtonProps) => {
  return (
    <button
      {...props}
      className="w-full sm:w-auto px-8 py-4 flex justify-center items-center border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition-colors"
    >
      {isLoading ? loadingText : (
        <>
          {children}
          {Icon && <Icon size={20} className="ml-2" />}
        </>
      )}
    </button>
  );
};

export default FormButton;