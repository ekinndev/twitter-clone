import React from 'react';
import Button from '../components/Button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/Navigation';

export default {
  title: 'Buttons'
};

export const Normal = () => <Button>Save</Button>;
export const NavButton = () => <NavigationButton>Save</NavigationButton>;
export const Nav = () => <Navigation/>;
