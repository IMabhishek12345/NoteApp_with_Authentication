import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    
    const s1={
        "name":"Abhishek",
        "class": "business"
    }
    const [state,setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
          setState({
            "name": "Abhi",
            "class": "Economy"
          })   
        },1000)
   }
    return (
        
        <NoteContext.Provider value={{state,update}}>
           {props.children}
        </NoteContext.Provider>
    )
   
}

export default NoteState;