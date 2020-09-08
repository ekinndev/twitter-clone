import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';
const Button = ({ children, className,full=false, ...props }) => {
  return (
    <button type='button' className={cn(styles.button, className, full && styles.fullWidth)} {...props}>
      {children}
    </button>
  );
};
export default Button;
