import styles from './login.module.css'
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword,signInWithPopup, TwitterAuthProvider, GithubAuthProvider  } from 'firebase/auth';
import GoogleButton from 'react-google-button';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Auth providers
    const TwProvider = new TwitterAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const logIn = async () => {
        try{
           await signInWithEmailAndPassword(auth,email,password)
        } catch(err){
            console.log(err);
        }
    }
//  login with google
    const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  // login with facebook
  const signInWithTwitter = async () => {
    try{
      await signInWithPopup(auth, TwProvider)
    }  catch(err){
      console.log(err); 
    }
  }
  //  login with github
  const signInWithGithub = async () => {
    try{
        await signInWithPopup(auth, githubProvider)

      } catch(err)  {
        console.log(err);
      }
  }

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
          <GoogleButton onClick={signInWithGoogle}/>
        <button onClick={signInWithTwitter}>Twitter</button><br /><br />
        <button onClick={signInWithGithub}>Github</button>

        </div> 
      </form>
    </section>
  )
}

export default Login