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
  // set submit from flashcard  and send the data to backend
  const handleFlashCardSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post('/flashcardcreateNL/flipCreate', {
        text,
        deckName,
      });
      console.log('the text is', text);
      setText({
        frontSideLine1: '',
        frontSideLine2: '',
        backSideLine1: '',
        backSideLine2: '',
      });
      console.log('the text is', text);
      console.log(response.data.message);
      if (response.data.message === 'your card is created successfully') {
        console.log('res====>', cardInfo);
        // let arr= cardInfo.push(JSON.stringify(response.data.data))
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
  console.log(cardInfo);
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
      }}
    >
      {' '}
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
