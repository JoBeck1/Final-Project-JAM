
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import './NavbarStyling.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >


 <Routes>
  
  <Route path= "/" element= {<Home/>}/>
  <Route path="/signup" element= {<RegisterForm />}/>
  <Route path="/flashcardcreateNL" element= {<FlashcardCreate />}/>
  <Route path= "/login"  element= {<LoginForm />}/>
 </Routes>
    </div>
  );
}

export default App;
