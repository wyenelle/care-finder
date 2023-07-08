import { useContext, useState } from "react";
import {MyContext} from "../../context/context";
import styles from "./hospital.module.css";

const Hospital = () => {
  const {
    hospitalsList,
    deleteHospital,
    getHospital,
    updateHospitalData,
    setUpdatedInfo,
    updatedInfo,
  } = useContext(MyContext);

  const [location, setLocation] = useState("");

  //  deletes an hospital from the collection by colleccting it's id here and passing it up to th deleting function
  const del = (id: string) => {
    deleteHospital(id);
    getHospital();
  };

  //  hndles editing the hospital data
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdatedInfo({ ...updatedInfo, hospital: value });
  };

  const filteredHospitalData = hospitalsList.filter((hospital) =>
    hospital.state.toLowerCase().includes(location.toLocaleLowerCase())
  );
  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <h2> find hospitals around you</h2>
        <input
          type="text"
          list="locations"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <datalist id="locations">
          <option value="lagos"></option>
          <option value="ogun"></option>
          <option value="abujas"></option>
          <option value="abia"></option>
          <option value="Imo"></option>
        </datalist>
      </div>

      <div className={styles.hospitalList}>
        {
          // filters the state and maps over the returned array as well
          filteredHospitalData.length >= 1 ? (
            filteredHospitalData.map((obj) => (
              <div key={obj.id}>
                <h2 style={{ textTransform: "capitalize" }}>{obj.name} </h2>
                <div className={styles.contact}>
                  {/* <address>{obj.email} </address>
                  <address>{obj.phone} </address> */}
                </div>
                <article className={styles.imgBox}></article>
                <div>
                  <p>
                    {obj.details} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vel dolorem similique libero commodi,
                    repellat voluptatem.
                  </p>
                </div>
                <span className={styles.address}>
                  {`${obj.address}, ${obj.state}`}{" "}
                </span>

                <button onClick={() => del(obj.id)}> delete hospital</button>
                <br />
                <input type="text" onChange={handleInput} />
                <button
                  style={{ padding: "10px" }}
                  onClick={() => updateHospitalData(obj.id)}
                >
                  edit
                </button>
              </div>
            ))
          ) : (
            <h3> no result for this search</h3>
          )
        }
      </div>
    </section>
  );
};

export default Hospital;
