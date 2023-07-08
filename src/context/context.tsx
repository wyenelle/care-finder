
export const MyContextProvider = ({children,value}: MyContextType) => {
  return (  <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
)
}