import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Background from "../assets/images/background1.jpg"
import "../styles/formStyling.css"


import {Context} from "../Store"

const schema= yup.object().shape({
  firstName: yup.string().required("enter the name !!!"),
  Surname: yup.string().required(),
  Email: yup.string().required(),
  Age: yup.number().positive().integer().required(),
  Password: yup.string().min(5).max(20).required(),
  ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null])
})
export default function RegisterForm() {


  const {handelSignUp}= useContext(Context)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({resolver: yupResolver(schema)});

  const onSubmit = async (data) => {console.log(data);
  console.log(errors);


handelSignUp(data);

}


  return (
    <FormWrapper className ="form-wrapper">
        <TextH2>Register Form </TextH2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          name="firstName"
          placeholder="First name"
          {...register("firstName")}
        />
        <p style={{color: "red"}}>{errors.firstName?.message}</p>
        <StyledInput
          type="text"
          name="Surname"
          placeholder="Surname"
          {...register("Surname")}
        />
        <p style= {{color: "red"}}>{errors.Surname?.message}</p>
        <StyledInput
          type="text"
          placeholder="Email"
          {...register("Email")}
          name="Email"
        />
        <p style={{color: "red"}}>{errors.Email?.message}</p>
        <StyledInput
          type="number"
          placeholder="Age"
          {...register("Age")}
          name="Age"
        />
        <p style={{color: "red"}}>{errors.Age?.message}</p>
        <StyledInput
          type="password"
          placeholder="Password"
          {...register("Password")}
          name="Password"
        />
        <p style={{color: "red"}}>{errors.Password?.message}</p>
        <StyledInput
          type="password"
          placeholder="ConfirmPassword"
          {...register("ConfirmPassword")}
          name="ConfirmPassword"
        />
        <p style={{color: "red"}}>{errors.ConfirmPassword&& "password should match"}</p>

        <StyledButton type="submit"> submit</StyledButton>
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
  
  padding: 0 20px;
  width: 100vw;
  background-size : cover;
  @media only screen and (max-width :320px) {
    width: 80vw;
    height:90vh;
 
  }

  `;
  const TextH2= styled.h2`
    margin: 3rem 0 2rem 0;
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
display:flex;
flex-direction: column;
  width: 100vw;
  max-width: 700px;
  padding: 40px;
 background-color: rgba(119, 220, 98, 0.26);
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
  background: linear-gradient(to right, #b9e8a2 0% ,#414740 79% );
  color: #dbe6ea;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  height: 2rem;
  width: 40%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background: linear-gradient(to right, #414740 0% , #b9e8a2 79% );
    color: #211f1c;
    transition: 1s;

  }
`;
