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
        setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})
    }
    
    return( 
     <div>
       <div className="container my-3">
            <h2 align="center">Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
                </div>
                    
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={onChange} name="description" value={note.description} id="description" minLength={5} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" onChange={onChange} name="tag" value={note.tag}  id="tag" minLength={5} required />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>AddNote</button>
            </form>
    </div>
    </div>
   )
}
export default AddNote;