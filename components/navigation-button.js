import React from 'react';
import styles from './navigation-button.module.css';
import Button from './Button';
const NavigationButton = ({ children }) => {
  return <Button className={styles.navButton}>{children}</Button>;
};
export default NavigationButton;
