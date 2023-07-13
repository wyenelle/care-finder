import styles from "./header.module.css";
import helper from "../../helper/helper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <section className={styles.headerSection}>
        <div className={styles.wrapper1}>
          <h1>
            At carefinder, we connect you with health care services around you
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            necessitatibus animi distinctio minus, deserunt impedit.
          </p>
        </div>

        <Link to="hospital" className={styles.btn}>
          Submit
        </Link>
      </section>

      <section className={styles.headerSection2}>
        <div className={styles.flexImg}>
          <div className={styles.imgBox}>
            <img src={helper.Doctor} alt="" className={styles.img} />
            <div className={styles.absolute}>
              <p>Professionals</p>
            </div>
          </div>
          <div className={styles.imgBox2}>
            <img src={helper.Hospital} alt="" className={styles.img} />
            <div className={styles.absolute}>
              <p>Hospitals</p>
            </div>
          </div>
          <div className={styles.imgBox}>
            <img src={helper.Doctors} alt="" className={styles.img} />
            <div className={styles.absolute}>
              <p>Nurses</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
