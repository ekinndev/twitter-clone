import React from 'react';
import cn from 'classnames';
import Button from './Button';
import styles from './icon-button.module.css';

const IconButton = ({ children, className, ...props }) => {
  return (
    <Button type='button' className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  );
};
export default IconButton;
