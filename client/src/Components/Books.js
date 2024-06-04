import React from 'react';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
// import Book Cover1 from '../images/cover1.jpg';
// import Book Cover2 from '../images/cover2.jpg';

function Books() {
  const [books,setBooks]=useState([])

   useEffect(()=>{
    const fetchAllBooks = async()=>{
        try{
            const res= await axios.get("http://localhost:8000/books")
            setBooks(res.data);
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchAllBooks()
   },[]);

   const handleDelete= async (id)=>{
    try{
        await axios.delete("http://localhost:8000/books/"+id)
        window.location.reload()
    }
    catch(err){
        console.log(err)
    }

    // const imageFileName=[
    //         { "id": 1, "title": "Book 1", "description": "Description 1", "price": "$19.99", "imageFileName": "cover1.jpg" },
    //         { "id": 2, "title": "Book 2", "description": "Description 2", "price": "$24.99", "imageFileName": "cover2.jpg" }
    // ]

}
   
  return (
    
    <div>
       
        <h1>BOOK SHOP <br></br><button className='addbutton'><Link to="/add" className='addtext'>Add new book</Link></button></h1>
        
        <div className="books-container">
            {books.map((book,index)=>(
               <div className="book-group" key={book.id}>
                <div className='book'>
                {book.cover && (
                <div>
                  {console.log('Image Path:', process.env.PUBLIC_URL + `/images/${book.cover}`)}
                  <img src={process.env.PUBLIC_URL + `/images/${book.cover}`} alt={`Book Cover ${index + 1}`} />
                </div>
              )}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                 <span>${book.price}</span>
                 <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
                 <button className='update'><Link className="updatetext" to={`/update/${book.id}`} >Update</Link></button>
                </div>
                </div>
            ))}
            
        </div>
        
    </div>
  )
}

export default Books