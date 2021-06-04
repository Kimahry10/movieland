import { Link } from "react-router-dom";

import * as Routes from '../../routes';

import styles from './Footer.module.scss';
import baseLayout from "../../layouts/BaseLayout.module.scss";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={baseLayout.wrapper}>
        <Link to={Routes.FOUROFOUR}>404</Link>
      </div>
    </footer>
  );
};

export default Footer;