const express=require('express');
const app=express();

app.get('/user',(req,res)=>{
    res.send('hello world');
})


app.get('/product',(req,res)=>{
    res.send('hello product');
})


app.get('/order',(req,res)=>{
    res.send('Shoes');
})



app.listen(3000);

