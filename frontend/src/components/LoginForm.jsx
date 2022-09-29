import React from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components'; 

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <FormWarper>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <StyledInput type="password" placeholder="password" {...register("password", {required: true, maxLength: 12})} />

      <StyledButton onSubmit={handleSubmit(onSubmit)} type="submit" >Login</StyledButton>
    </StyledForm>
    </FormWarper>
  );
}

const FormWarper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;
const SharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${SharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #EAF8BF;
  color: #006992;
  font-size: 1rem;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background-color: #006992;
    color: #EAF8BF;
    transition: 1s;
  }
`;







