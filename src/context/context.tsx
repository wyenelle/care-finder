import { createContext } from "react";

type MyContextType = {
    children: React.ReactNode,
    value: object
}
export const MyContext = createContext({})

// export const MyContextProvider = ({children,value}: MyContextType) => {
//     <MyContext.Provider value={value}>
//         {children}
//     </MyContext.Provider>
// }