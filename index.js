const {urlencoded} = require('express');
const express=require('express');

const app= express()
app.use(express.json())


const port = 3000;
app.listen(port,()=>{
    console.log(`app running on ${port}`);
})