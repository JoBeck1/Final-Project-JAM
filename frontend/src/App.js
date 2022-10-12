
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import './styles/NavbarStyling.css';
import Learning from './components/Learning';

import { ToastContainer} from "react-toastify"
import Profile from "./components/Profile"

function App() {
  
  return (
    <div >



 <Routes>
  
  <Route path= "/" element= {<Home/>}/>
  <Route path="/signup" element= {<RegisterForm />}/>
  <Route path="/flashcardcreateNL" element= {<FlashcardCreate />}/>
  <Route path="/flashcardcreate/learning" element= {<Learning />}/>
  <Route path= "/login"  element= {<LoginForm />}/>
  <Route path= "/profile" element= {<Profile />}/>
 </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
