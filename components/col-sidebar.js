import React from 'react';
import cn from 'classnames';
import Navigation from './Navigation';
import ThemeButton from './theme-button';
import styles from './col-sidebar.module.css';
import ProfileBox from './profile-box';
import TweetModal from './tweet-modal';
function Layout({ flat }) {
  const [isShowModal, isShowModalSet] = React.useState(false);
  const onModalClose = () => {
    isShowModalSet(false);
  };
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat}></Navigation>
      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>
      {isShowModal && <TweetModal onModalClose={onModalClose} onClick={onModalClose} />}
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Layout;
