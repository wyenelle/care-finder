import { createContext } from "react";

type MyContextType = {
    chlidren: React.ReactNode
}
const MyContext = createContext('')

export default MyContext