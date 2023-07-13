import styles from "./home.module.css";
import Header from "../../components/header/header";
import HomeBody from "../../components/homeBody/homeBody";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.body}>
        <HomeBody />
      </section>
    </div>
  );
};

export default Home;
