import React, { useState,useContext, useEffect,useRef} from 'react';
import NoteContext from '../context-notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes,editNote } = context;
 
  const ref=useRef(null);
  const refClose=useRef(null);
  
  useEffect(() => {
    getNotes()
    //eslint-disable-next-line
  },[]);
  
  const[note,setNote]=useState({id:"",etitle:"",edescription:"",etag:"default"});

  const handleClick=(e)=>{
    console.log("Updating the note",note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
   
}
  const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
   }

  const updateNote = (currentnote) => {
    setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag});
    ref.current.click();
  }
   return (
    <>
      <AddNote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Launch demo modal
      </button>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
                </div>
                    
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={onChange} name="edescription" value={note.edescription} id="edescription"  minLength={5} required/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="etag" className="form-label">tag</label>
                    <input type="text" className="form-control" onChange={onChange} name="etag" id="etag" value={note.etag}/>
                </div>
                  
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

     

      <div className='row'>
        <h2>Your notes</h2>
         <div className="container mx-2">
         {notes.length===0 && "No notes to display"}
         </div>
        
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  )
}
        

export default Notes
