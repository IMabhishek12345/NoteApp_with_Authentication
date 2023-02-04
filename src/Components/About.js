import React,{useContext,useEffect} from 'react'
import noteContext from '../context-notes/NoteContext'

const About = () => {
    
    const a = useContext(noteContext);
    useEffect(()=>{
       a.update();
        // eslint-disable-next-line  
    },[])
    return (
    <div>
     
      This is About and name is {a.state.name} and class is {a.state.class}
    </div>
  )
}

export default About
