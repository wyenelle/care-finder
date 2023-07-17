import { createContext } from "react"
import { HospitalsDataType,UserType } from "../App"

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
setHospitalList: React.Dispatch<React.SetStateAction<HospitalsDataType[]>>,
logout: () => Promise<void>,
get_user: () => void,
user: UserType | null,
}

export const MyContext = createContext   ({ 
  hospitalsList: [{state: '',
    name: '',
    address: '',
    details: '',
    id: ''}],
  getHospital: () => {console.log('hi');
  },
  deleteHospital: (id: string) => {console.log(id)},
  updateHospitalData: (id : string) => {console.log(id)},
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
}) => console.log(data),
setHospitalList: (data:HospitalsDataType[]) => console.log(data),
logout: () => {console.log('hi')},
get_user: () => {console.log('hi')},
user: {name: '',id:''} || null
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