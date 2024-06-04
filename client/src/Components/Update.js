import React from 'react'
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Update() {
  const [book,setBook]= useState({
    title:"",
    description: "",
    price: null,
    cover:"",
})

  const navigate=useNavigate();
  const location=useLocation();

  const bookId =location.pathname.split("/")[2]

  console.log(location.pathname.split("/")[2]);

  const handleChange=(e)=>{
      setBook((prev)=> ({...prev,[e.target.name]:e.target.value}));
  }

  const handleClick=async e=>{
      e.preventDefault()
      try{
          await axios.put("http://localhost:8000/books/"+bookId,book);
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
        
    <h1 className='font'>UPDATE BOOK</h1>
    <input type="text" placeholder='title' name="title" onChange={handleChange}/>
    <input type="text" placeholder='description' name="description" onChange={handleChange}/>
    <input type="number" placeholder='price' name="price" onChange={handleChange} />
    <input type="text" placeholder='cover' name="cover" onChange={handleChange}/>
    <button className='formButton'onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update