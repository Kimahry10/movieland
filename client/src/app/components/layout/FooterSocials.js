import React from 'react'
import styles from './FooterSocials.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import FooterNewsletter from './FooterNewsletter';

const FooterSocials = () => {
  return (
    <div className={styles.footerSocialsAndNewsletter}>
      <div className={styles.footerIconWrap}>
        <Link to='#' >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to='#' >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to='#' >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
      {/* newsletter */}
      <FooterNewsletter />
    </div>
  )
}

export default FooterSocials
