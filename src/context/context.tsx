import { createContext } from "react";
import { HospitalsDataType } from "../App";

type ValueType = {
    hospitalsList: HospitalsDataType[],
    getHospital: () => Promise<void>,
    deleteHospital: (id: string) => Promise<void>,
    updateHospitalData: (id: string) => Promise<void>,
    updatedInfo: {
        hospital: string;
        state: string;
        address: string;
        details: string;
    },
    setUpdatedInfo: React.Dispatch<React.SetStateAction<{
        hospital: string;
        state: string;
        address: string;
        details: string;
    }>>,
    setHospitalList: React.Dispatch<React.SetStateAction<HospitalsDataType[]>>
}
type MyContextType = {
    children: React.ReactNode,
    value: ValueType
}

export const MyContext = createContext ({})

export const MyContextProvider = ({children,value}: MyContextType) => {
  return (  <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
)
}