import styles from "./home.module.css";
import Header from "../../components/header/header";
import HomeBody from "../../components/homeBody/homeBody";
import Footer from "../../components/footer/foooter";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.body}>
        <HomeBody />
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
