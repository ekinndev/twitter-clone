import React from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import Photo from './photo';
import styles from './tweet.module.css';
import IconButton from './IconButton';
import * as Icon from './icons';

function Tweet({ created_at, retweet_count, favorite_count, retweeted, favorited, text, user }) {
  return (
    <div className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span> <span>@{user.screen_name}</span> .{' '}
          {formatDistanceToNowStrict(new Date(created_at))}
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>{<Icon.Reply />}</IconButton>
            <span>0</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>{<Icon.Retweet />}</IconButton>
            {retweet_count && <span>{retweet_count}</span>}
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>{<Icon.Like />}</IconButton>
            {favorite_count && <span>{favorite_count}</span>}
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>{<Icon.Share />}</IconButton>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Tweet;
