import React from 'react';
import Button from '../components/Button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons/';
import TitleBold from '../components/title-bold';
export default {
  title: 'Buttons'
};

export const Normal = () => <Button>Save</Button>;
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
);
export const Nav = () => <Navigation selectedKey='home' />;
