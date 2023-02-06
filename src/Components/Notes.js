import React,{useContext} from 'react';
import NoteContext from '../context-notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = () => {
    const context=useContext(NoteContext);
    const {notes,setNotes,addNote}=context;
  
    return (
     <>
      <AddNote />
     <div className='row'>
       <h2>Your notes</h2>
           {notes.map((note)=>{
               return <Noteitem note={note}/>;
           })}
      </div>
    </>
  )
}

export default Notes
