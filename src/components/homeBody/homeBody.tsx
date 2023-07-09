import styles from './home.module.css'
import helper from '../../helper/helper'

const HomeBody = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <div>
        <h2>
          we are number one when it comes to healthcare services
        </h2>
        </div>
      </div>
      <div className={styles.img}>
            <img src={helper.Hospital3} alt="" className={styles.image}/>
        <div className={styles.imgContainer}>
            <div className={styles.box}> 
            {/* <img src={helper.Hospital2} alt="" className={styles.img2}/> */}
            </div>
            <div className={styles.box}>
          {/* <img src={helper.Hospital1} alt="" className={styles.img2}/> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBody