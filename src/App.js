import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context-notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={<Home  />} />
            
          <Route exact path="/about" element={<About />}/>
         
        </Routes>
      </Router>
      </NoteState>   
    </>
);
}
         
export default App;
