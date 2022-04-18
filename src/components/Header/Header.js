import styles from "../../styles/components/header/Header.module.css";

import hamburguer from '../../assets/images/icon-hamburger.svg';
import DesktopMenu from "./DesktopMenu";
import MenuMobile from './MenuMobile';
import React, {useState} from 'react'
const Header = function (props) {
const [displayMenu, setDisplayMenu] = useState(false);

const displayMenuMobile = function(e){
    e.preventDefault();
    setDisplayMenu(true);
}

const closeMenu = function(){
    setDisplayMenu(false)
}

    return (
        <header className={styles['main-header']}>
            <img className={styles['main-header__menu_hamburger']} src={hamburguer} onClick={displayMenuMobile} alt="menu-icon"  />
            <DesktopMenu
                sortBy = {props.sortBy}
            />
            <MenuMobile menuValid={displayMenu} onCloseMenu={closeMenu}  />
        </header>
    );
};

export default Header;
