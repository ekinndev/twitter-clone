import React from 'react';
import cn from 'classnames';
import styles from './photo.module.css';
function Photo({
  src = 'https://pbs.twimg.com/profile_images/1267398962258083840/eeJ6zzrJ_400x400.jpg',
  alt,
  children
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}

export default Photo;
