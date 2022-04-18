import styles from "../../styles/components/header/navigation/DesktopMenu/DesktopMenu.module.css";
import React, { useContext } from "react";
import NavContext from "../../context/navcontext";

const DesktopMenu = function (props) {
    const ctx = useContext(NavContext);

    return (
        <nav className={styles["nav-desktop"]}>
            <ul className={styles["nav-desktop__list"]}>
                <li
                    className={styles["nav-desktop__item"]}
                    id="users"
                    onClick={ctx.onMenuOption}
                >
                    Users
                </li>
                <li className={styles["nav-desktop__item"]}>
                    <input
                        onChange={ctx.onFilter}
                        type="search"
                        placeholder="Search user"
                        className={styles['nav-desktop__search']}
                    />
                </li>
                <li
                    className={styles["nav-desktop__item"]}
                    id="sorting"
                >
                    Sorting:
                </li>
                <li
                    className={styles["nav-desktop__item"]}
                    id="sortName"
                    onClick={function () {
                        props.sortBy("fname")
                    }}

                >
                    Name
                </li>
                <li
                    className={styles["nav-desktop__item"]}
                    id="sortCity"
                    onClick={function () {
                        props.sortBy("city")
                    }}
                >
                    City
                </li>
            </ul>
        </nav>
    );
};

export default DesktopMenu;
