import React, { useState } from 'react'
import MainNavigation from './MainNavigation';
import styles from './MainNavigation.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';


const MobileNavigation = () => {

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

  return (
    <nav className={styles.mobileNavigation}>
      <AiOutlineMenu className={styles.hamburgerIcon} size='2rem' color='#fff' onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)} />
      {hamburgerIsOpen && <MainNavigation />}
    </nav>
  )
}

export default MobileNavigation
