import React, {useState} from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import ProfileNavigation from './ProfileNavigation'
import styles from './ProfileNavigation.module.scss';


const ProfileIconCollapse = () => {
  const [profileNavigationOpen, setProfileNavigationOpen] = useState(false)
  return (
      <>
      <BsFillPersonFill className={styles.profileIcon} size='4rem' color='#fff' onClick={() => setProfileNavigationOpen(!profileNavigationOpen)} />
        {profileNavigationOpen && <ProfileNavigation />}
      </>
  )
}

export default ProfileIconCollapse
