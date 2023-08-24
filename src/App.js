
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddEmployess from "./Components/AddEmployess";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">

    <Router>
        <Navbar/>
     

        <Routes>
          <Route exact path="/addemp" element={<AddEmployess/>}></Route>
          <Route exact path ="/" element={<Home/>}></Route>
        </Routes>
       
        

      

       
    </Router>

    </div>
  );
}

export default App;
