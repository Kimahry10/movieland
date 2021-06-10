import React from 'react'
import { Link } from 'react-router-dom';
import styles from './FooterSupport.module.scss';

const FooterSupport = () => {
  return (
    <div className={styles.footerSupport}>
      <h2>support</h2>
      <div className={styles.footerSupport__linkWrap}>
        <Link to='#' >Company Info</Link>
        <Link to='#' >Terms of Use</Link>
        <Link to='#' >FAQ</Link>
        <Link to='#' >Contact</Link>
      </div>
    </div>
  )
}

export default FooterSupport
