import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  // Figma 스펙에 따른 기본 스타일
  // Container: corner radius 12px, padding 12px, fill #111
  // Text: Pretendard semibold 16px, line-height 148%, letter-spacing -2%, fill #fff
  // Hover & Pressed: fill #111 80%
  const isDisabled = disabled || loading;

  const buttonClasses = [
    'px-3 py-3', // padding 12px
    'rounded-[12px]', // corner radius 12px
    'font-semibold', // Pretendard semibold (600)
    'text-base', // 16px
    'leading-[148%]', // line-height 148%
    'tracking-[-0.02em]', // letter-spacing -2% (-0.02em)
    'text-white', // fill #fff
    'bg-[#111]', // fill #111 (default)
    'hover:bg-[rgba(17,17,17,0.8)]', // hover: fill #111 80%
    'active:bg-[rgba(17,17,17,0.8)]', // pressed: fill #111 80%
    'transition-colors duration-200',
    isDisabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
    'font-sans', // Pretendard 폰트
    'relative',
    'flex items-center justify-center',
  ].join(' ');

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`${buttonClasses} ${className}`}
      aria-busy={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};
