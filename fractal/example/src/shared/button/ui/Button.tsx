import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

export function Button({ className, icon, children, ...rest }: ButtonProps) {
  const classes = ['shared-button', className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {icon && <span className="shared-button__icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
