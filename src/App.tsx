  import styles from "./App.module.css";
import Home from "./pages/home/home";
import Nav from "./components/navbar/Nav";
import SignIn from "./pages/auth/signin";
import { Routes, Route } from "react-router-dom";
import Hospital from "./pages/hospitals/hospital";
import Admin from "./pages/admin/admin";
import { useState, useEffect } from "react";
import {MyContextProvider} from "./context/context";
import { auth,db } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Login from "./pages/auth/login";
// export interface HospitalsDataType {
//   state: string;
//   name: string;
//   address: string;
//   details: string;
//   email: string;
//   phone: string;
//   id: string;
// }

export type HospitalsDataType = {
  state: string,
  name: string,
  address: string,
  details: string,
  id: string
}

function App () {
  const [hospitalsList, setHospitalList] = useState<HospitalsDataType[]>([])
  const [updatedInfo,setUpdatedInfo] = useState({
    hospital: "",
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
      const hospitalData: HospitalsDataType[] = data.docs.map((doc) => ({
        // ...doc.data(),
        state: doc.data()?.state,
        name: doc.data()?.name,
        address: doc?.data()?.address,
        details: doc?.data()?.details,
        // email: doc?.data()?.email,
        // phone: doc?.data()?.phone,
        id: doc.id,
      }));
      
      setHospitalList(hospitalData);
      // console.log(hospitalData)
    } catch (err) {
      console.error(err);
    }
  };

  // delete an entry
  const deleteHospital = async (id: string) => {
    const hospitalRef = doc(db, "hospitals", id);
    await deleteDoc(hospitalRef);
  };

  // update an entry
  const updateHospitalData = async (id: string) => {
    const hospitalRef = doc(db, "hospitals", id);
    await updateDoc(hospitalRef, { name: updatedInfo.hospital });
    getHospital();
  };

  useEffect(() => {
    getHospital();
  }, []);

  const get_user = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log(user);
    }
  });

  return (
    <main className={styles.container}>
      <MyContextProvider  value={{ hospitalsList, getHospital,deleteHospital,updateHospitalData,updatedInfo,setUpdatedInfo,setHospitalList }}>
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
}

export default App;
