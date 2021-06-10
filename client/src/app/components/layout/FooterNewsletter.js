import React from 'react'
import styles from './FooterNewsletter.module.scss';

const FooterNewsletter = () => {
  return (
    <div className={styles.footerNewsletter}>
      <h2>newsletter</h2>
      <div className={styles.footerNewsletter__inputButtonWrap}>
        <input type="text" />
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default FooterNewsletter
