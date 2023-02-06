import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context-notes/NoteState';
import Alert from './Components/Alert';
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
        <Alert message="Welcome to inotebook " />
        <div className="container">

        <Routes>
          
          <Route exact path="/" element={<Home  />} />
            
          <Route exact path="/about" element={<About />}/>
         
        </Routes>
        </div>
      </Router>
      </NoteState>   
    </>
);
}
         
export default App;
