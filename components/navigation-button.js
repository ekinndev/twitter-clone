import React from 'react';
import styles from './navigation-button.module.css';
import Button from './Button';
import cn from 'classnames';
const NavigationButton = ({ href, notify,className, children, selected, ...props }) => {
  return (
    <Button className={cn(styles.navButton, selected && styles.navButtonSelected,className)} href={href} {...props}>
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
};
export default NavigationButton;
