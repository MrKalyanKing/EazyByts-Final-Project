import { createContext } from "react";


export const GeneralContext=createContext();


export const ContextProvider=({children})=>{
  
   const url=`http://localhost:8080/api`
   
 
    return (
        <GeneralContext.Provider value={url}>
            {children}
        </GeneralContext.Provider>
    )
}