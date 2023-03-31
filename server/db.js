const mongoose=require('mongoose');

function connectDB(){

    mongoose.connect('mongodb+srv://csudharshanraju964:spykar*964*@cluster0.axrjo2o.mongodb.net/rental-car',{useUnifiedTopology: true , useNewUrlParser: true})
   

    const connection=mongoose.connection;
    connection.on('connected',()=>{
        console.log("Succesfully connected to db...")
    })
    connection.on('error',()=>{
        console.log("Failed connecting to db...")
    })
}
connectDB();
module.exports=mongoose;