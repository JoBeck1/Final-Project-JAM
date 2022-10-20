import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


export const Context = createContext();

function ContextProvider(props) {
  
  const [isProfile, setIsProfile] = useState();
  // flip card state
  const [flip, setFlip] = useState(false);
  const [deckName, setDeckName] = useState('');

  // state for hide Deckname the input field after entering the name
  const [isInputExist, setIsInputExist] = useState(true);

  const [text, setText] = useState({
    frontSideLine1: '',
    frontSideLine2: '',
    backSideLine1: '',
    backSideLine2: '',
  });
  // set number for how many flash card has been created
  const [count, setCount] = useState(0);
  // const navigate = useNavigate()
  // onsubmit
  // send the data to backend to rigister

  // git the deck to the unregisterd user by using localstorage
  const [cardInfo, setCardInfo] = useLocalStorage('cardInfo', []);
  // set state to make array of card info in learning page
  const [cardInfoArray, setCardInfoArray]= useState([])


  // set state to items inside sidebar 
  const [nextStage, setNextStage] = useState({
    title: ""
  })
  const handelSignUp = async (data) => {
    try {
      const result = await axios.post('/signup', { data });
      //  await  console.log(result.data.message)
      if (result.data.message === 'user is already exist ') {
        toast.error(' user is already exist ', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handelLogin = async (logindata) => {
    try {
      const resultLoginData = await axios.post('/login', { logindata });
      console.log(resultLoginData.data);
      setIsProfile(resultLoginData.data);
      if (resultLoginData.data.message === 'invalid password') {
        toast.error('wrong Email or password', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return resultLoginData.data;
    } catch (err) {
      console.log(err);
    }
  };

  // flash card functions
  // flip card change side
  const handelFlip = (e) => {

    e.preventDefault();
    setFlip(!flip);
  };

  // set the input field value
  const handleInputText = (e) => {
    setText();
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const createNewCard =(e)=>{
    e.preventDefault();
 
     setResetPages(!resetPages)
     setToChartPage(!toChartPage)
   setCardInfo(JSON.stringify([]))
    // window.location.reload()
    
  }
  // set submit from flashcard  and send the data to backend
  const handleFlashCardSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post('/flashcardcreateNL/flipCreate', {
        text,
        deckName,
      });
    
      setText({
        frontSideLine1: '',
        frontSideLine2: '',
        backSideLine1: '',
        backSideLine2: '',
      });
      
      
      if (response.data.message === 'your card is created successfully') {
       
       
        cardInfoArray.push(response.data.data);
        setCardInfoArray(cardInfoArray)
        //cardInfoArray.push(JSON.stringify(response.data.data));
        setCardInfo(JSON.stringify(cardInfoArray));
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setCount(count + 1);
      } else {
        toast.error('please fill all field', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  // function to store the name if deck
  const handelNameOnDickCard = (e) => {
    setDeckName(e.target.value);
  };
  // function to handel the input field and reset the value inside the deck
  const handelDeckNameSubmit = (e) => {
    e.preventDefault();
    setIsInputExist(false);
    e.target.reset();
  };
  // state to get all created card from backend 

  const [learningData, setLearningData]= useState({})

  // function to done with flash card and go to the learning stage 

  const navigateToLearning= async()=> {
    let data = await axios.get("/flashcardcreate/learning") 
    setLearningData(data.data)
    // user can go to next step learning and testing if he just click on done with decks 
    if (numberOfFlashCards>0) {
      setResetPages(!resetPages)

     setNextStage({title: 'Learning'})
      toast.success("welcome to learn Stage", {position:toast.POSITION.TOP_CENTER})
   } else if (numberOfFlashCards===0) {
    toast.error('please create a flash card ', {
      position: toast.POSITION.TOP_CENTER,
    })
   }
  }
  // state for counting result of testing
const [test, setTest]= useState({yes:0, no:0,notSure: 0})
const [delay, setDelay] = useState(false)
const [toNextCardIndex, setToNextCardIndex] = useState(0)
const [popup, setPopup] = useState(false)
// function to count answers in the testing page 

let ArrayOfCardInfo= (cardInfo!==[]) ? JSON.parse(cardInfo) : []
let numberOfFlashCards=ArrayOfCardInfo.length
console.log(numberOfFlashCards);
const countAnswer= (buttonName)=>{
  if (toNextCardIndex<numberOfFlashCards-1) {
    if (buttonName==="yes") {
      
      setTest({...test, yes:test.yes+1 })
      setFlip(!flip)
      setDelay(!delay)
    } if (buttonName==="no") {
      
      setTest({...test, no:test.no+1 })
      setFlip(!flip)
      setDelay(!delay)
    } if (buttonName==="not sure") {
      setTest({...test, notSure:test.notSure+1})
      setFlip(!flip)
      setDelay(!delay)
    }
    setToNextCardIndex(toNextCardIndex+1)
  }
  if (toNextCardIndex===numberOfFlashCards-1) {

    setToNextCardIndex(0)

    if (buttonName==="yes") {
      
      setTest({...test, yes:test.yes+1 })
      setFlip(!flip)
      setDelay(!delay)
    } if (buttonName==="no") {
      
      setTest({...test, no:test.no+1 })
      setFlip(!flip)
      setDelay(!delay)
    } if (buttonName==="not sure") {
      setTest({...test, notSure:test.notSure+1})
      setFlip(!flip)
      setDelay(!delay)
    }
    setPopup(!popup)
  }
  
  }
  // state to set message for successfully passed or failed 
  const [finalResult,setFinalResult]= useState("")
  const [toChartPage, setToChartPage] = useState(false)
  let calcTheResult= ()=> {
    setPopup(!popup)
    setToChartPage(!toChartPage)
    let sum=Object.values(test).reduce((sum,a)=>sum+a, 0)
   if (test.yes>=sum/2) {
    setFinalResult("You are successfully passed the test keep learning !!")
   } else {
    setFinalResult("Unfortunately !! You couldn't make it but keep learning")
   }
  }
  const [resetPages, setResetPages]= useState(true)
 
  const repeatTheTest= ()=>{
    setToChartPage(!toChartPage)
    setTest({yes:0, no:0,notSure: 0})
  }
  return (
    <Context.Provider
      value={{
        handelSignUp,
        handelLogin,
        isProfile,
        flip,
        setFlip,
        text,
        setText,
        handelFlip,
        handleFlashCardSubmit,
        handleInputText,
        count,
        deckName,
        setDeckName,
        handelNameOnDickCard,
        handelDeckNameSubmit,
        isInputExist,
        setIsInputExist,
        cardInfo,
        setCardInfo,
        nextStage,
       setNextStage,
       navigateToLearning,
       countAnswer, toNextCardIndex, test,
       setDelay,
       delay, finalResult,toChartPage, calcTheResult, popup,
        resetPages, repeatTheTest, createNewCard
      }}
    >
      {' '}
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
