import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import styles from "./signin.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(auth?.currentUser?.email); 

  // handes the submit button
  const signIn = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  
//    function signIn(){
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     console.log(error.message) 
//     // ..
//   });
// }

  

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
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

        <button className={styles.submitBtn} onClick={signIn}>
          submit
        </button>

        {/* <div className={styles.socialMediaLogin}>
          <button onClick={signInWithGoogle}>sign in with google</button>
        </div> */}
        {/* <button onClick={logout}>
          log out
        </button>
         */}
      </form>
    </section>
  );
};

export default SignIn;
