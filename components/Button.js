import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';
import Link from 'next/link';
const LinkButton = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
const BaseButton = ({ children, ...props }) => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};
const Button = ({ children, className, full = false, ...props }) => {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp type='button' className={cn(styles.button, className, full && styles.fullWidth)} {...props}>
      {children}
    </Comp>
  );
};
export default Button;
