import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  const host="http://localhost:5000";
  const notesinitial=[]; 
  const [notes,setNotes]=useState(notesinitial);
 
      //Get all notes
      const getNotes=async(title,description,tag)=>{
        //TO DO API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
         method: 'GET', 
         headers: {
           'Content-Type': 'application/json',
           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTJlY2NhNmM2NjMzYjcwNjFlYmY0In0sImlhdCI6MTY3NTMxMjgzMX0.V7PqUR5ays2vnfdiWNxR7woVJsC2Crq_TwyLGnPM9_8"
         }
         
       });
       const json=await response.json();
       console.log(json);
       setNotes(json);
      }
    
      //Add a note 
      const addNote=async(title,description,tag)=>{
        //TO DO API CALL
        const response = await fetch(`${host}/api/notes/addnotes`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTJlY2NhNmM2NjMzYjcwNjFlYmY0In0sImlhdCI6MTY3NTMxMjgzMX0.V7PqUR5ays2vnfdiWNxR7woVJsC2Crq_TwyLGnPM9_8"
        },
        body: JSON.stringify({title,description,tag}) 
      });
      const json=await response.json();
      setNotes(notes.concat(json));
     
    }
      
        
    //Delete a note 
    const deleteNote=async(id)=>{
        //API call
         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
         method: 'DELETE', 
         headers: {
           'Content-Type': 'application/json',
           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTJlY2NhNmM2NjMzYjcwNjFlYmY0In0sImlhdCI6MTY3NTMxMjgzMX0.V7PqUR5ays2vnfdiWNxR7woVJsC2Crq_TwyLGnPM9_8"
         }
        });
        const json=await response.json();
        console.log(json); 
        console.log("deleting notes "+ id);
        const newNotes=notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
        
      }  
        
        
         
    //Edit a note
    const editNote=async(id,title,description,tag)=>{
      //API CALL
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTJlY2NhNmM2NjMzYjcwNjFlYmY0In0sImlhdCI6MTY3NTMxMjgzMX0.V7PqUR5ays2vnfdiWNxR7woVJsC2Crq_TwyLGnPM9_8"
        },
        body: JSON.stringify({title,description,tag}) 
      });
      const json= await response.json();
      console.log(json);  
      console.log(notes);
      let newNotes=JSON.parse(JSON.stringify(notes));
      //logic to edit in client
      //console.log(newNotes);
      
      for (let index=0;index < newNotes.length;index++){
         const element=newNotes[index];
         if (element._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break; 
        }
          
      
      }
      //console.log(id,newNotes);     
      setNotes(newNotes);
      
  }


    
    return (
        
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
   
}

export default NoteState;