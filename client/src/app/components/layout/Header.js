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

const Header = () => {
  const { currentUser, signOut } = useAuth();

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
            {/* <input type="text" placeholder="Search..." onChange={(e) => console.log(e.target.value)} /> */}
            <>
              {!!currentUser ? (
                <>
                  <ProfileIconCollapse />
                </>
              ) : (
                <StyledLink to={Routes.AUTH_SIGN_IN}>Sign In</StyledLink>
              )}
            </>
          </div>
        </div>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
