import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import { useAuth } from "../../contexts/firebase/auth.context";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import styles from "./Header.module.scss";
import baseLayout from "../../layouts/BaseLayout.module.scss";
import styled from "styled-components";
import CompanyLogo from "./CompanyLogo";

import ProfileIconCollapse from "./ProfileIconCollapse";
import ThemeToggler from "../project/ThemeToggler";
import { ThemeContext } from '../../../lib/context';

const Header = () => {
  const { currentUser, signOut } = useAuth();

  const { theme } = useContext(ThemeContext);

  const StyledLink = styled(Link)`
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
  `;

  return (
    <header className={styles.header}>
      <div className={baseLayout.wrapper}>
        <div className={styles.upperHeader}>
          <Link to='/'>
            <CompanyLogo />
          </Link>
          <div className={styles.inputAndButtonWrap}>
            <ThemeToggler/>
            <div>
              {!!currentUser ? (
                <>
                  <ProfileIconCollapse />
                </>
              ) : (
                <StyledLink to={Routes.AUTH_SIGN_IN}>Sign In</StyledLink>
              )}
            </div>
          </div>
        </div>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
