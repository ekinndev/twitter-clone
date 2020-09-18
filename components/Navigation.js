import React from 'react';
import NavigationButton from './navigation-button';
import TextTitle from './text-title';
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  HomeFill,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
  ProfileFill
} from './icons';
import styles from './navigation.module.css';

const MENU = [
  { key: 'twitter', icon: <Twitter />, title: '', notify: 0 },
  { key: 'home', icon: <Home />, iconSelected: <HomeFill />, title: 'Home', notify: 0 },
  { key: 'explore', icon: <Explore />, iconSelected: <ExplorerFill />, title: 'Explore', notify: 0 },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  { key: 'messages', icon: <Messages />, iconSelected: <MessagesFill />, title: 'Messages', notify: 0 },
  { key: 'bookmark', icon: <Bookmark />, iconSelected: <BookmarkFill />, title: 'Bookmark', notify: 0 },
  { key: 'lists', icon: <Lists />, iconSelected: <ListsFill />, title: 'Lists', notify: 0 },
  { key: 'profile', icon: <Profile />, iconSelected: <ProfileFill />, title: 'Profile', notify: 0 },
  { key: 'more', icon: <More />, iconSelected: <More />, title: 'More', notify: 0 }
];

const Navigation = ({ flat = false, selectedKey = 'home' }) => {
  return (
    <nav className={styles.nav}>
      {MENU.map(menu => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = selectedKey === menu.key;
        return (
          <NavigationButton key={menu.key} selected={selected} notify={menu.notify && menu.notify}>
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
};
export default Navigation;
