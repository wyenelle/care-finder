import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// type MyContextType = {
//     children: React.ReactNode,
//     value: object
// }

export interface HospitalsDataType {
  state: string;
  name: string;
  address: string;
  details: string;
  email: string;
  phone: string;
  id: string;
}

export interface updatedInfoInterface {
  hospital: string;
  state: string;
  address: string;
  details: string;
}

export const updatedInfoSchema: updatedInfoInterface = {
  hospital: "",
  state: "",
  address: "",
  details: "",
};

export interface MyContextInterface {
  hospitalsList: HospitalsDataType[];
  deleteHospital: (id: string) => Promise<void>;
  getHospital: () => Promise<void>;
  updateHospitalData: (id: string) => Promise<void>;
  setUpdatedInfo: Dispatch<SetStateAction<updatedInfoInterface>>;
  updatedInfo: updatedInfoInterface;
  setHospitalList: Dispatch<SetStateAction<HospitalsDataType[]>>;
}

export const MyContext = createContext<MyContextInterface | null>(null);

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [hospitalsList, setHospitalList] = useState<HospitalsDataType[]>([]);
  const [updatedInfo, setUpdatedInfo] =
    useState<updatedInfoInterface>(updatedInfoSchema);

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
        email: doc?.data()?.email,
        phone: doc?.data()?.phone,
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
    MyContext;
    getHospital();
  }, []);
  return (
    <MyContext.Provider
      value={{
        hospitalsList,
        getHospital,
        deleteHospital,
        updateHospitalData,
        updatedInfo,
        setUpdatedInfo,
        setHospitalList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext) as MyContextInterface;
export default MyContextProvider;
// export const MyContextProvider = ({children,value}: MyContextType) => {
//     <MyContext.Provider value={value}>
//         {children}
//     </MyContext.Provider>
// }
