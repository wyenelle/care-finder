import React from "react";
import styles from "./App.module.css";
import Home from "./pages/home/home";
import Nav from "./components/navbar/Nav";
import SignIn from "./pages/auth/signin";
import { Routes, Route } from "react-router-dom";
import Hospital from "./pages/hospitals/hospital";
import Admin from "./pages/admin/admin";
import MyContextProvider from "./context/context";
// import { auth, } from "./config/firebase";
// import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/auth/login";

const App: React.FC = () => {
  // const get_user = onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid);
  //   } else {
  //     console.log(user);
  //   }
  // });

  return (
    <main className={styles.container}>
      <MyContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MyContextProvider>
    </main>
  );
};

export default App;
