import React from 'react'
import Notes from '../Components/Notes';
import AddNote from '../Components/AddNote';

const Home = (props) => {
    const {showAlert}=props;
  
    return (
         <div>
        

        <Notes showAlert={showAlert}/> 
        
        </div>
        )
        
    }

export default Home
           


