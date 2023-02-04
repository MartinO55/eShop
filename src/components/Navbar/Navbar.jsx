import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link;
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/products" className={activeStyle}>
          Products
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
