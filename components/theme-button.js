import React from 'react';
import styles from './theme-button.module.css';
import Button from './Button';
import cn from 'classnames';
const ThemeButton = ({ className, big = false, children, ...props }) => {
  return (
    <Button className={cn(styles.button, className, big && styles.bigButton)} {...props}>
      {children}
    </Button>
  );
};
export default ThemeButton;
