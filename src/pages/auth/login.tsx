import styles from './login.module.css'
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth,email,password)
            console.log(user.user);
        } catch(err){
            console.log(err);
        }
    }
    const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.submitBtn} onClick={logIn}>
          submit
        </button>

         <div className={styles.socialMediaLogin}>
          <button onClick={signInWithGoogle}>sign in with google</button>
        </div> 
      </form>
    </section>
  )
}

export default Login