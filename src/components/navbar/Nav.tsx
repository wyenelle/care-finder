import styles from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        {" "}
        <h1>Carefinder</h1>
      </Link>
      <ul className={styles.listWrapper}>
        <li className={styles.listItem}>
          <Link to="login">login</Link>
        </li>
        <Link to="signin"> sign in</Link>
      </ul>
      <Link to="admin">add</Link>
    </nav>
  );
};

export default Nav;
