import { createContext } from "react";


export const GeneralContext=createContext();


export const ContextProvider=({children})=>{
  
   const url=`https://kalyanevents.onrender.com/api`
   
 
    return (
        <GeneralContext.Provider value={url}>
            {children}
        </GeneralContext.Provider>
    )
}