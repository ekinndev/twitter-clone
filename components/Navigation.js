import React from 'react';
import NavigationButton from './navigation-button';
import TextBold from './text-title';
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from './icons';
import styles from './navigation.module.css';
const Navigation = ({ flat=false,selectedKey }) => {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'home'}>
        <Home />
        <TextBold>Home</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextBold>Explore</TextBold>
      </NavigationButton>
      <NavigationButton notify={17} selected={selectedKey === 'notification'}>
        <Notification />
        <TextBold>Notification</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextBold>Messages</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextBold>Bookmark</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextBold>Lists</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextBold>Profile</TextBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <TextBold>More</TextBold>
      </NavigationButton>
    </nav>
  );
};
export default Navigation;
