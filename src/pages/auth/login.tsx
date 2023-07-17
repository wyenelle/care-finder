import styles from './login.module.css'
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword,signInWithPopup, FacebookAuthProvider  } from 'firebase/auth';
import GoogleButton from 'react-google-button';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const provider = new FacebookAuthProvider()
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
  const signInWithFacebook = async () => {

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const fbuser = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
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
        <button onClick={signInWithFacebook}>facebook</button>
        </div> 
      </form>
    </section>
  )
}

export default Login