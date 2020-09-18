import React from 'react';
import Button from '../components/Button';
import NavigationButton from '../components/navigation-button';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons/';
import TextBold from '../components/text-title';
import ThemeButton from '../components/theme-button';
import Stack from '../components/stack';
export default {
  title: 'Buttons',
  decorators: [withKnobs]
};

export const Normal = () => <Button>Save</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>TWEET</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Full Big
    </ThemeButton>
  </Stack>
);
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextBold>Home</TextBold>
  </NavigationButton>
);
export const Nav = () => {
  const flat = boolean('Flat', false);
  return <Navigation selectedKey='home' flat={flat}/>;
};
