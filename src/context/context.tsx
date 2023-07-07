import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { HospitalsDataType, updatedInfoInterface } from "../App";

// type MyContextType = {
//     children: React.ReactNode,
//     value: object
// }

export interface MyContextInterface {
  hospitalsList: HospitalsDataType[];
  deleteHospital: (id: string) => Promise<void>;
  getHospital: () => Promise<void>;
  updateHospitalData: (id: string) => Promise<void>;
  setUpdatedInfo: Dispatch<SetStateAction<updatedInfoInterface>>;
  updatedInfo: updatedInfoInterface;
}
export const MyContext = createContext({});

export const useMyContext = () => useContext(MyContext) as MyContextInterface;
// export const MyContextProvider = ({children,value}: MyContextType) => {
//     <MyContext.Provider value={value}>
//         {children}
//     </MyContext.Provider>
// }
