import React from 'react';
import cn from 'classnames';
import styles from './profile-box.module.css';
import Photo from './photo';
import { ArrowBottom } from './icons';
import Button from './Button';
import TextBody from './text-body';
function ProfileBox({ flat = false, slug = 'ekinndev', name = 'Ekin Abalıoğlu' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <React.Fragment>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </React.Fragment>
      )}
    </Button>
  );
}

export default ProfileBox;
