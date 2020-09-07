import React from 'react';
import styles from './navigation-button.module.css';
import Button from './Button';
import cn from 'classnames';
const NavigationButton = ({ notify, children, selected, ...props }) => {
  return (
    <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
};
export default NavigationButton;
