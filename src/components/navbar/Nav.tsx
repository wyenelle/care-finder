import { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
// 
const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.care}>
        {" "}
        <h1>Carefinder</h1>
      </Link>
      <ul className={styles.listWrapper}>
          <Link to="login" className={styles.auth}>login</Link>
        
        <Link to="signin" className={styles.auth}> sign in</Link>
      </ul>
      {
        loggedIn ? <div className={styles.add}>
        <Link to="admin">add</Link>
        </div> : null
      }
      
    </nav>
  );
};

export default Nav;
