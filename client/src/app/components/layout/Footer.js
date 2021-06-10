import { Link } from "react-router-dom";

import * as Routes from '../../routes';

import styles from './Footer.module.scss';
import baseLayout from "../../layouts/BaseLayout.module.scss";
import FooterGenres from "./FooterGenres";
import FooterSocials from "./FooterSocials";
import FooterSupport from "./FooterSupport";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* genres */}
      <FooterGenres />
      {/* socials + newsletter */}
      <FooterSocials />
      {/* support */}
      <FooterSupport />


    </footer>
  );
};

export default Footer;