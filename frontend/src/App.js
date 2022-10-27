
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import './styles/NavbarStyling.css';
import Learning from './components/Learning';

import { ToastContainer} from "react-toastify"
import Profile from "./components/Profile"
import ContactForm from './components/contact/ContactForm';
import Allwords from "./components/WordCollection/Allwords"

import 'bootstrap/dist/css/bootstrap.min.css'

import UserProfile from './components/UserProfile';




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


  <Route path= "/userprofile/" element= {<UserProfile />}/>
  <Route path= "/contact" element= {<ContactForm />}/>


 </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
