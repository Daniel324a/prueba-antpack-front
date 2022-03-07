import { MouseEventHandler } from 'react';

import { Link } from 'react-router-dom';

import styles from '../styles/';

const { buttons, animateTransforms } = styles;

export const Button = ({ onClick, text = '', className = '', disabled = false, type = 'button' }: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={className + buttons.button + (disabled && buttons.disabled) + animateTransforms}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.Link = ({ path = '/', text = '', className = '', disabled = false }: ButtonLinkProps) => (
  <Link to={path} className={className + buttons.outlined + (disabled && buttons.disabledOutlined) + animateTransforms}>
    {text}
  </Link>
);

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonLinkProps {
  path: string;
  text?: string | JSX.Element;
  className?: string;
  disabled?: boolean;
}