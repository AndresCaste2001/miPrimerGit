import { createContext, useState } from "react";
export const colorContext = createContext();

export const ColorProvider = ({children})=> {
    const [color, setColor] = useState("red");
    return(
        <colorContext.Provider value={{color, setColor}}>
            {children}
        </colorContext.Provider>
    )
}