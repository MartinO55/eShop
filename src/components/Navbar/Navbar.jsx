import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import storeLogo from "../../assets/petFashionLogoAlpha.jpg";

const Navbar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? `${styles.nav_linkHolder} ${styles.active}`
      : styles.nav_linkHolder;
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_logoHolder}>
          <NavLink to="/" className={styles.nav_logo}>
            <img src={storeLogo} className={styles.nav_logo_image} />
          </NavLink>
          <h2 className={styles.nav_storeName}>EShop</h2>
        </div>

        <div className={styles.nav_linkHolder}>
          <NavLink to="/" className={activeStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={activeStyle}>
            Products
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
