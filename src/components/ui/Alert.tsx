import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const baseStyle = 'p-4 rounded-md flex justify-between items-start';
  const typeStyles = {
    success: 'bg-green-100 border border-green-400 text-green-700',
    error: 'bg-red-100 border border-red-400 text-red-700',
    info: 'bg-blue-100 border border-blue-400 text-blue-700',
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type]}`} role="alert">
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className="ml-4 -mt-1 -mr-1 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2" aria-label="Close">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
