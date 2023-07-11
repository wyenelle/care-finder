import styles from "./home.module.css";
import helper from "../../helper/helper";

const HomeBody = () => {
  return (
    <section className={styles.container}>
      <section className={styles.text}>
        <div>
          <h2>we are number one when it comes to healthcare services</h2>
        </div>
      </section>

      <section className={styles.img}>
        <div className={styles.box}>
        <img src={helper.DoctorWithPatient} alt="" className={styles.image} />
        </div>
        <div className={styles.box2}>
          <img src={helper.Gloves} alt="" className={styles.img2} />
        </div>
      </section>
    </section>
  );
};

export default HomeBody;
