import React from 'react';
import { useRouter } from 'next/router';
import NavigationButton from './navigation-button';
import TextTitle from './text-title';
import { MENU } from '../constants';
import cn from 'classnames';
import styles from './navigation.module.css';

const Navigation = ({ flat = false }) => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map(menu => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = router.pathname === menu.path;
        return (
          <NavigationButton
            key={menu.key}
            selected={selected}
            notify={menu.notify && menu.notify}
            href={menu.path}
            className={cn(styles.navButton,menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
};
export default Navigation;
