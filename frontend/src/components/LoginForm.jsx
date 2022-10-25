import React , {useContext} from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import {Context} from "../store/Store"
import {useNavigate} from "react-router-dom"
import "../styles/formStyling.css"


export default function LoginForm() {
  const navigate= useNavigate()
    const {handelLogin, learningData} = useContext(Context)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {console.log(data);
  console.log(errors);
 const loginResult= await handelLogin(data)
 if (loginResult==="login success") {
navigate("/flashcardcreateNL")
 }
 console.log(loginResult);
 
  }
  return (
    <FormWrapper className="form-wrapper" >
        <TextH2> Enter your email and password</TextH2>
    <StyledForm onSubmit={handleSubmit(onSubmit)} >
      <StyledInput type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <StyledInput type="password" placeholder="Password" {...register("Password", {required: true})} />

      <StyledButton type="submit" > Login</StyledButton>
    </StyledForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 20px;
  background-size: cover;
  @media only screen and (max-width :320px) {
    width: 80vw;
    height:90vh;
 h2 {
  font-size:20px;
 }
 button{
  width: 30vw;
  font-size:15px;
  padding: 5px;
 }
  }

`;
const TextH2= styled.h2`
margin: 3rem 0 2rem 0;
font-weight: bold;
color: rgba(32, 94, 14, 0.958);
`
const SharedStyles = css`
 background-color:rgba(70,163,147,0.38);
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  box-sizing: border-box;
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color:rgba(119, 220, 98, 0.26);
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px -22px 102px -4px rgba(168,136,136,0.59);
-webkit-box-shadow: 2px -22px 102px -4px rgba(168,136,136,0.59);
-moz-box-shadow: 2px -22px 102px -4px rgba(168,136,136,0.59);
backdrop-filter: blur(8.5px);
letter-spacing: 0.2rem;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${SharedStyles}
  &:focus{
    display: inline-block;
    box-shadow: 0 0 0 0.1rem;
    backdrop-filter: blur(12rem);
  }
`;
const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  background: linear-gradient(to right, #b9e8a2 0% ,#414740 79% );;
  color: #dbe6ea;
  font-size: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  height: 2rem;
  width: 40%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background:linear-gradient(to right, #414740 0% , #b9e8a2 79% );
    color: #eaf8bf;
    transition: 1s;
  }
`;

