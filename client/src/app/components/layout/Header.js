import MainNavigation from './MainNavigation';
import styles from './Header.module.scss';
import logo from '../../../assets/images/Logo.svg'
import {
    Link
} from "react-router-dom";
import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

const Header = () => {
    const { currentUser, signOut } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.upperHeader}>
                <a href='/'><img src={logo} alt="logo" /></a>
                <div className={styles.inputAndButtonWrap}>
                    <input type="text" placeholder='Search...' />
                    <div>
                        {/* <a className={styles.logInButton} href="#">Log in</a> */}
                        {!!currentUser
                            ? <button onClick={signOut}><img className={styles.user__avatar} src={currentUser.photoURL} alt={currentUser.email} />Logout</button>
                            : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
                        }
                        <a className={styles.signUpButton} href="#">Sign up</a>
                    </div>
                </div>
            </div>
            <MainNavigation />
        </header>
    );
};

export default Header;