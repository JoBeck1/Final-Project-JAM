
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import { ToastContainer} from "react-toastify"
import Profile from "./components/Profile"

function App() {
  
  return (
    <div className="App">



 <Routes>
  <Route path= "/" element= {<Home/>}/>
  <Route path="/signup" element= {<RegisterForm />}/>
  <Route path="/flashcardcreateNL" element= {<FlashcardCreate />}/>
  <Route path= "/login"  element= {<LoginForm />}/>
  <Route path= "/profile" element= {<Profile />}/>
 </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
