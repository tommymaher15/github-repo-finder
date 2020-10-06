import React from 'react'
import styled from "styled-components";
// import {  FiSearch } from "react-icons/fi";
const Form = ({HandleSubmit, HandleChange, data}) => {
    return (
      <div>

     <SearchContainer>
        <FormItem onSubmit = {HandleSubmit}>
        <SearchInput type = "text" placeholder = "Search.. " onChange ={HandleChange} value = {data}></SearchInput>

 
            </FormItem>
       </SearchContainer>
       </div>
    )
    }
    export default Form
   

const SearchInput = styled.input`

width: 100%;
  height: 2.8rem;
  background: red;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  font-family: Calibre;
    font-weight: 400;
background: linear-gradient(315deg, #d9dee1, #ffffff);
box-shadow:  -5px -5px 5px #c8cdd0, 
             5px 5px 5px #ffffff;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
  background-color:#f1f7fa

`;






const FormItem = styled.form`




`;


const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-content:center;

`;




