import './App.css';
import Navbar from './Navbar';
import Sign_in from './Sign_in';
import List from './List';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App2() {
  return (

     
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Sign_in" element={<Sign_in/>}/>
          <Route path="/"/>
          <Route path="/liste" element={<List/>}/>
        </Routes>
      </BrowserRouter>


      


  );
}

export default App2;
