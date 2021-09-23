import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';

export interface ButtonProps {
  text: string;
  border?: boolean;
  className?: string;
  shape?: 'rectangle' | 'pill';
  color?: 'primary' | 'secondary' | 'white';
  type?: ButtonHTMLAttributes<any>['type'];
}

function Button({ type = 'submit', color = 'primary', border = false, className = '', shape = 'rectangle', text }: ButtonProps) {
  return (
    <button className={`btn btn--${color}${border ? '-border' : ''} ${className} ${shape === 'pill' && 'btn--pill'}`} type={type}>
      {text}
    </button>
  );
}

export default Button;
