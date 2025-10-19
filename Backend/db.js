const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://manikantanikhil5:Mespop_10@cluster0.2a2ur.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log("---",err)
        else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("items2");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log();

        })
    }
    
    });
}


module.exports = mongoDB;


