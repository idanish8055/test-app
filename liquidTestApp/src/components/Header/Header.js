import classes from './Header.module.css';
import Navigation from './Navigation';
import { isBrowser, isMobile } from 'react-device-detect';
import MobileDrawer from './MobileDrawer';

const Header = () => {    
    return (
        <div className={classes.sectionHeader}>
            <div id='#navigation'>
                {isBrowser && <Navigation />}
                {isMobile && <MobileDrawer/>}
            </div>
        </div>
    );
}

export default Header;
