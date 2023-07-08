import { createContext } from "react"
import { HospitalsDataType } from "../App"

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

export const MyContext = createContext   ({ 
  hospitalsList: [{state: '',
    name: '',
    address: '',
    details: '',
    id: ''}],
  getHospital: () => {console.log('hi');
  },
  deleteHospital: (id: string) => {console.log('hi')},
  updateHospitalData: (id : string) => {console.log('hi')},
  updatedInfo: {
    hospital: "",
    state: "",
    address: "",
    details: "",
},
setUpdatedInfo: (data: {
  hospital: string;
  state: string;
  address: string;
  details: string;
}) => console.log('hi'),
setHospitalList: (data:HospitalsDataType[]) => console.log('hi')

})

type MyContextType = {
  children : React.ReactNode,
  value: ValueType
} 
export const MyContextProvider = ({children,value}: MyContextType) => {
  return (
      <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
)
}