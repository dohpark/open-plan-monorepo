import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appName?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ appName, children, ...props }) => {
  const handleClick = () => {
    if (appName) {
      alert(`Hello from ${appName}!`);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
