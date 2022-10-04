import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

import {Context} from "../Store"

export default function App() {

  const {handelSignUp}= useContext(Context)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {console.log(data);
  console.log(errors);

handelSignUp(data);

}


  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Register Form </h2>
        <StyledInput
          type="text"
          placeholder="First name"
          {...register('firstName', { required: true, maxLength: 80 })}
        />
        <StyledInput
          type="text"
          placeholder="Surname"
          {...register('Surname', { required: true, maxLength: 100 })}
        />
        <StyledInput
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <StyledInput
          type="number"
          placeholder="Age"
          {...register('Age', { required: true, maxLength: 3 })}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          {...register('Password', { required: true, min: 6 })}
        />
        <StyledInput
          type="password"
          placeholder="ConfirmPassword"
          {...register('ConfirmPassword', { min: 8 })}
        />

        <StyledButton type="submit"> submit</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
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
  background-color: #eaf8bf;
  color: #006992;
  font-size: 1rem;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background-color: #006992;
    color: #eaf8bf;
    transition: 1s;
  }
`;
