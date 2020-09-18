import React from 'react';
import cn from 'classnames';
import Navigation from './Navigation';
import ThemeButton from './theme-button';
import styles from './col-sidebar.module.css';
import ProfileBox from './profile-box';
function Layout({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat}></Navigation>
      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Layout;
