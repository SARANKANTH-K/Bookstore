import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"saran",
    database:"test",
    insecureAuth: true,
})

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json("Hello this is backend")
})

app.get("/books",(req,res)=>{
    const sql="SELECT * FROM books";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.post("/books",(req,res)=>{
   
    const sql="INSERT INTO books(`title`,`description`,`price`,`cover`) VALUES (?)"
    const values=[
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
        
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created successfully.");
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const sql="DELETE FROM books WHERE id=?"

    db.query(sql,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    })
})

app.put("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const sql="UPDATE books SET `title`=?,`description`=?,`price`=?,`cover`=? WHERE ID=?"

    const values=[
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
    ]
    db.query(sql,[...values,bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been Updates successfully.");
    })
})

app.listen(8000, ()=>{
    console.log("Listening")
})