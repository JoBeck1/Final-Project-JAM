
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">


 <Routes>
  <Route path= "/" element= {<Home/>}/>
  <Route path="/signup" element= {<RegisterForm />}/>
  <Route path="/flashcardcreateNL" element= {<FlashcardCreate />}/>
  <Route path= "/login" />
 </Routes>
    </div>
  );
}

export default App;
