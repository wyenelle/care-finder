import { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/context";
import { useContext } from "react";
import { useLocation } from "react-router-dom";


const Nav = () => {
  const {user,logout} = useContext(MyContext)
  const location = useLocation();
  const route = location.pathname;
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.care}>
        {" "}
        <h1>Carefinder</h1>
      </Link>
      {
        user?.name ? <button onClick={logout} className={styles.auth}> logout</button>  :
      <ul className={styles.listWrapper}>
          <Link to="login" className={styles.auth}>login</Link>
        <Link to="signin" className={styles.auth}> sign in</Link>
      </ul> 
      }

      {
        user?.name && route === '/hospital' ? <div className={styles.add}>
        <Link to="admin">add</Link>
        </div> : null
      }
      
    </nav>
  );
};

export default Nav;
