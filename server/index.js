const express=require('express');
const app=express();
const port=process.env.Port || 8000;
const dbConnection=require('./db');
app.use(express.json());

const adminRoute=require('./routes/admin');
// const proposalRoutes = require('./routes/proposal')
const userRoutes = require('./routes/user');

app.use('/admin',adminRoute);
// app.use('/proposal', proposalRoutes);
app.use('/user', userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>console.log(`server is running at ${port}`));