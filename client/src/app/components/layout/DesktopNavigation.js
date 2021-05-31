import React from 'react'
import MainNavigation from './MainNavigation';
import styles from './MainNavigation.module.scss';

const DesktopNavigation = () => {
  return (
    <nav className={styles.desktopNavigation}>
      <MainNavigation />
    </nav>
  )
}

export default DesktopNavigation
