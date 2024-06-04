import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Add() {
    const [book,setBook]= useState({
        title:"",
        description: "",
        price: null,
        cover:"",
    })

    const navigate=useNavigate();

    const handleChange=(e)=>{
        setBook((prev)=> ({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick=async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8000/books",book);
            navigate("/")
        }
        catch(err)
        {
           console.log(err);
        }
    }

    console.log(book);
  return (
    <div className='form'>
        
        <h1 className='font'>ADD NEW BOOK</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange}/>
        <input type="text" placeholder='description' name="description" onChange={handleChange}/>
        <input type="number" placeholder='price' name="price" onChange={handleChange}/>
        <input type="text" placeholder='cover' name="cover" onChange={handleChange}/>
        <button className="formButton1" onClick={handleClick}>Add</button>
        </div>
  )
}

export default Add