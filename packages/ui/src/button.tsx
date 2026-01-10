import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  // Figma 스펙에 따른 기본 스타일
  // Container: corner radius 12px, padding 12px, fill #111
  // Text: Pretendard semibold 16px, line-height 148%, letter-spacing -2%, fill #fff
  // Hover & Pressed: fill #111 80%
  const buttonClasses = [
    'w-full', // width 100%
    'px-3 py-3', // padding 12px
    'rounded-[12px]', // corner radius 12px
    'font-semibold', // Pretendard semibold (600)
    'text-base', // 16px
    'leading-[148%]', // line-height 148%
    'tracking-[-2%]', // letter-spacing -2%
    'text-white', // fill #fff
    'bg-[#111]', // fill #111 (default)
    'hover:bg-[rgba(17,17,17,0.8)]', // hover: fill #111 80%
    'active:bg-[rgba(17,17,17,0.8)]', // pressed: fill #111 80%
    'transition-colors duration-200',
    'cursor-pointer',
    'font-sans', // Pretendard 폰트
    'disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' ');

  return (
    <button {...props} className={`${buttonClasses} ${className}`}>
      {children}
    </button>
  );
};
