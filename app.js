const mongoose = require('mongoose');

const DB_HOST = "mongodb+srv://admin:Zupa_325@cluster0.lmqeqwx.mongodb.net/books-collections?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_HOST).then(()=>{
    console.log("MongoDB Connected!");
}).catch(err=>{
    console.log(err);
})