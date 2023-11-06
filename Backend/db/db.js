const mongoose=require('mongoose');

const db=async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.mongoDburl)
        console.log('Connection Established with Database');
    }
    catch(error){
        console.log("DB connection error");
    }
}

module.exports={db}