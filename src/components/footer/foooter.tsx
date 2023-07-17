import styles from './footer.module.css'
// import helper from '../../helper/helper'

const Footer = () => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.col1}>
          <div className={styles.col1Wrapper}>
          <div className={styles.imgContainer}>
            {/* <img src={Helper.Logo} alt="logo" /> */}
            <h2>Care Finder</h2>
          </div>
          <p>
            Care Finder is an organisation that aims to bridge the gap between healthcare professionals in Africa and technology and also enable them to become problem solvers using technology.
          </p>
          </div>
        </section>
        <section className={styles.col2}>
          <div className={styles.academy}>
             <div className={styles.academyWrapper}>
             <h2>Services</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                    Web Development
                </li>
                <li className={styles.listItem}>
                    UI/UX Design
                </li>
                <li className={styles.listItem}>
                    Graphics Design
                </li>
                <li className={styles.listItem}>
                    Data Analysis
                </li>
                <li className={styles.listItem}>
                    Prosuct Managemnt
                </li>
                <li className={styles.listItem}>
                    Motion Graphics and Video ads 
                </li>
                <li className={styles.listItem}>
                    Broad Analysis and social Media Managemnt
                </li>
              </ul>
             </div>
          </div>
          <div className={styles.academy}>
          <div className={styles.academyWrapper}>
             <h2>Hospitals</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                    Hackathon
                </li>
                <li className={styles.listItem}>
                    PortFolio
                </li>
                <li className={styles.listItem}>
                    About Us 
                </li>
                <li className={styles.listItem}>
                    Our Team
                </li>
              </ul>
             </div>
          </div>
          <div className={styles.academy}>
          <div className={styles.academyWrapper}>
             <h2>Careers</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                    Pitafrica@gmail.com
                </li>
                <li className={styles.listItem}>
                    Web Development
                </li>
                <li className={styles.listItem}>
                    Web Development
                </li>
                <li className={styles.listItem}>
                    Web Development
                </li>
              </ul>
             </div>
          </div>
        </section>

      </div>
      <section className={styles.footer}>
        <p> &copy; 2020 Care Finder. All Right Reserved</p>
        <div className={styles.footerImg}>
          {/* <img src={helper.Facebook} alt='facebook'/>
          <img src={helper.LinkedIn} alt='linkedin'/>
          <img src={helper.Twitter} alt='twitter'/>
          <img src={helper.Instaagram} alt='instagram'/>
          <img src={helper.Github} alt='github'/>
          <img src={helper.Gmail} alt='gmail'/> */}
        </div>
      </section>
    </main>
  )
}

export default Footer