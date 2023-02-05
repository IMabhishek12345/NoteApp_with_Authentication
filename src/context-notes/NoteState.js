import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
     
    const notesinitial=[
        {
          "_id": "63db8156c7babeb8c0d47bdd",
          "user": "63da2ecca6c6633b7061ebf4",
          "title": "Note 1 ",
          "description": "Adding a note in my application",
          "tag": "personel",
          "date": "2023-02-02T09:24:38.995Z",
          "__v": 0
        },
        {
          "_id": "63db8a3ac7babeb8c0d47be0",
          "user": "63da2ecca6c6633b7061ebf4",
          "title": "Note 2  ",
          "description": "Remember your tasks for today",
          "tag": "personal",
          "date": "2023-02-02T10:02:34.732Z",
          "__v": 0
        },
        {
          "_id": "63dcd25a920307ffa5d941d1",
          "user": "63da2ecca6c6633b7061ebf4",
          "title": "Note 3 ",
          "description": " today updated description",
          "tag": "personal",
          "date": "2023-02-03T09:22:34.968Z",
          "__v": 0
        }
      ]; 
    const [notes,setNotes]=useState(notesinitial);
    return (
        
        <NoteContext.Provider value={{notes}}>
           {props.children}
        </NoteContext.Provider>
    )
   
}

export default NoteState;