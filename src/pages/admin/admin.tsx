import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
<<<<<<< HEAD
import { useContext } from "react";
import {MyContext} from "../../context/context";
=======

import { useMyContext } from "../../context/context";
>>>>>>> 2b5546ab4779e450d94fb91de0c7ebf90d8046ee
import styles from "./admin.module.css";

type Form = {
  hospital: string;
  state: string;
  address: string;
  details: string;
  email: string;
  phone: string;
  website: string;
  image: string;
};

const Admin = () => {
  // stores all alues from the form
  const [form, setForm] = useState<Form>({
    hospital: "",
    state: "",
    address: "",
    details: "",
    email: "",
    phone: "",
    website: "",
    image: "",
  });

  //  creates a references to the hospitals collection in our database
  const hospitalCollection = collection(db, "hospitals");

  // using Context to make available the function that handles fetching of data from the db to the global state
<<<<<<< HEAD
  const { getHospital } = useContext(MyContext);

=======
  const { getHospital } = useMyContext();
>>>>>>> 2b5546ab4779e450d94fb91de0c7ebf90d8046ee
  // this function handles user input on the form
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // adds a new information to our db
      await addDoc(hospitalCollection, {
        name: form.hospital,
        state: form.state,
        address: form.address,
        details: form.details,
        email: form.email,
        phone: form.phone,
        image: form.image,
        website: form.website,
      });

      console.log("submitted");
      getHospital();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className={styles.container}>
      <h2>Add Hospitals you know</h2>
      <div className={styles.wrapper}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="John Doe Healthcare"
            name="hospital"
            id="name"
            value={form.hospital}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="state">State</label>
          <input
            type="text"
            placeholder="Lagos"
            name="state"
            id="state"
            value={form.state}
            onChange={handleInput}
          />
        </div>{" "}
        <div className={styles.formControl}>
          <label htmlFor="details">Details</label>
          <input
            type="text"
            placeholder="details"
            name="details"
            id="details"
            value={form.details}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="address"
            name="address"
            id="address"
            value={form.address}
            onChange={handleInput}
          />{" "}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Johndoe@gmail.com"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInput}
          />{" "}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="url">Website</label>
          <input
            type="url"
            placeholder="https://www.hospital.com"
            name="website"
            id="url"
            value={form.website}
            onChange={handleInput}
          />{" "}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="0000 000 0000"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleInput}
          />{" "}
        </div>
        <br />
        <button className={styles.btn} onClick={handleSubmit}>
          {" "}
          submit
        </button>
      </div>
    </section>
  );
};

export default Admin;
