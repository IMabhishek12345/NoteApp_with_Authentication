import React,{ useContext,useState} from 'react';
import NoteContext from '../context-notes/NoteContext';

const AddNote=()=>{
    const context=useContext(NoteContext);
    console.log(context);
    const {addNote}=context;
    
    const[note,setNote]=useState({title:"",description:"",tag:"default"});
    
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})
    }
    
    return( 
     <div>
       <div className="container my-3">
            <h2 align="center">Add a Note</h2>
            <form className='my-3'>
                <div class="mb-3">
                    <label htmlFor="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                    
                <div class="mb-3">
                    <label htmlFor="description" class="form-label">Description</label>
                    <input type="text" class="form-control" onChange={onChange} name="description" id="description" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleClick}>AddNote</button>
            </form>
    </div>
    </div>
   )
}
export default AddNote;