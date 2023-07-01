import { useState } from "react";
import { db} from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import MyContext from "../../context/context";
import { getAuth } from "firebase/auth";

const Admin = () => {
  // stores all alues from the form
  const [form, setForm] = useState({
    hospital: "",
    state: "",
    address: "",
    details: "",
  });
  const auth = getAuth()
const user = auth.currentUser
  //  creates a references to the hospitals collection in our database
  const hospitalCollection = collection(db, "hospitals");

  // using Context to make available the function that handles fetching of data from the db to the global state
  const { getHospital } = useContext(MyContext);
  // this function handles user input on the form
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
//   console.log(user);
  
  const handleSubmit = async () => {

    try {
      // adds a new information to our db
      await addDoc(hospitalCollection, {
        name: form.hospital,
        state: form.state,
        address: form.address,
        details: form.details,
        // userId : auth?.currentUser?.uid
      });
      console.log("submitted");
      getHospital();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section>
      <input
        type="text"
        placeholder="name"
        name="hospital"
        value={form.hospital}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="state"
        name="state"
        value={form.state}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="details"
        name="details"
        value={form.details}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        value={form.address}
        onChange={handleInput}
      />{" "}
      <br />
      <button style={{ padding: "10px" }} onClick={handleSubmit}>
        {" "}
        submit
      </button>
    </section>
  );
};

export default Admin;
