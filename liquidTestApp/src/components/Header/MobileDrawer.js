import classes from './MobileDrawer.module.css';
import { Link } from 'react-router-dom';

const MobileDrawer = () => {
    const menuItems = [
        {
            "id": 1,
            "name": "Home",
            "path": "/",
            "aligment": "left"
        },
        {
            "id": 2,
            "name": "Tasks",
            "path": "/tasks",
            "aligment": "left"
        },
        {
            "id": 3,
            "name": "Test",
            "path": "/test",
            "aligment": "left"
        }
    ];

    const openDrawer = () => {
        document.getElementById("mySidenav").style.width = "100%";
    }
      
    const closeDrawer = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    const menuList = menuItems.map((menu)=>{
        return <li key={menu.id}>
            <Link to={menu.path} className={`${classes.navLink}`} onClick={closeDrawer}>{menu.name}</Link>
        </li>
    });
    return(
        <div>
            <ul className={classes.navListWrapper}>
                <li className={`${classes.menuIcon}`} onClick={openDrawer}>
                    &#9776;
                </li>
                <li className={`${classes.cedLogoMobile}`}>
                    <Link to="/">
                        <img src="/assets/white-logo.png" width="70px" height="55px" alt="logo" />
                    </Link>
                </li>
            </ul>
            <div id="mySidenav" className={classes.sidenav}>
                <li className="closebtn" onClick={closeDrawer}>&times;</li>
                {menuList}
                <li>
                    <Link className={`${classes.navLink} ${classes.active}`} to="/result" onClick={closeDrawer}>Result &#127942;</Link>
                </li>
            </div>
        </div>
    );
}

export default MobileDrawer;