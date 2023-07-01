import styles from "./App.module.css";
import Home from "./pages/home/home";
import Nav from "./components/navbar/nav";
import SignIn from "./pages/auth/signin";
import { Routes, Route } from "react-router-dom";
import Hospital from "./pages/hospitals/hospital";
import Admin from "./pages/admin/admin";
import { useState, useEffect } from "react";
import MyContext from "./context/context";
import { auth,db } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection,deleteDoc,doc,updateDoc } from "firebase/firestore";
import Login from "./pages/auth/login";
function App() {
  const [hospitalsList, setHospitalList] = useState([]);
  const [updatedInfo,setUpdatedInfo] = useState({
    hospital: '',
    state: "",
    address: "",
    details: "",

})

  // creates a refernece to the hospital collection in te database
  const hospitalCollection = collection(db, "hospitals");

  // fetches the data from the database
  const getHospital = async () => {
    try {
      // gets the documents in the collection in firebase
      const data = await getDocs(hospitalCollection);
      // console.log(data.docs)
      const hospitalData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHospitalList(hospitalData);
      // console.log(hospitalData)
    } catch (err) {
      console.error(err);
    }
  };
  // delete an entry
  const deleteHospital = async (id) => {
    const hospitalRef = doc(db,'hospitals',id)
    await deleteDoc(hospitalRef)
  }
  // update an entry
  const updateHospitalData  = async (id) => {
    const hospitalRef = doc(db,'hospitals',id)
    await updateDoc(hospitalRef, {name : updatedInfo.hospital})
    getHospital()

  }
  useEffect(() => {
    getHospital();
  }, []);


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log('hello')
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  return (
    <main className={styles.container}>
      <MyContext.Provider value={{ hospitalsList, getHospital,deleteHospital,updateHospitalData,updatedInfo,setUpdatedInfo }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MyContext.Provider>
    </main>
  );
}

export default App;
