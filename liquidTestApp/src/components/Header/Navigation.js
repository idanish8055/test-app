import { Link, Outlet } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
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
        },
        {
            "id": 4,
            "name": "Result",
            "path": "/result",
            "aligment": "right"
        },
    ];

    const menuList =menuItems.map((menu) => {
        return  <li key={menu.id} className={menu.aligment === "right" ? `${classes.navList} ${classes.rightMenu}` : classes.navList}>
                <Link className={menu.aligment === "right" ? `${classes.navLink} ${classes.active}` : classes.navLink} to={menu.path}>{menu.name}</Link>
            </li>
    });

    return(
        <>
        <nav>
            <ul className={classes.navListWrapper}>
                <li className={`${classes.navList}`}>
                    <Link to="/">
                        <img src="/assets/white-logo.png" width="70px" height="55px" alt="logo" />
                    </Link>
                </li>
                {menuList}
            </ul>
        </nav>
        <Outlet/>
        </>
    );
}  
export default Navigation;
