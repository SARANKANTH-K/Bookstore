import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Books from "./Components/Books";
import Add from "./Components/Add";
import Update from "./Components/Update";
import './App.css';
import Books from "./Components/Books";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Front from './Components/Front.js';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin" element={<Login />}/>
      <Route path="/books" element={<Books />}/>
      <Route path="/add" element={<Add />}/>
      <Route path="/Update/:id" element={<Update />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
