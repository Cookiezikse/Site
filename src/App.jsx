import './App.css';
import Navbar from './Navbar';
import Serie from './Serie';
import Movie from "./Movie";
import Action from './Actions';
import Research from './Research';
import NewTV from './NewTV';
import Sign_in from './Sign_in';
import List from './List';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/Sign_in" element={<Sign_in/>}/>
          <Route path="/"/>
          <Route path="/liste" element={<List/>}/>
        </Routes>
      </BrowserRouter>
      <Research></Research>
      <Serie></Serie>
      <Movie></Movie>
      <Action id='cate'></Action>
      <NewTV id='New'></NewTV>

      

    </div>
  );
}

export default App;
