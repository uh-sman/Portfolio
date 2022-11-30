import { createContext,useState ,useContext} from "react";

const StateContext = createContext()
const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value )
}
const themeColor = (color) = >{
    
}