const app = require("./app")
const mongoose = require("mongoose");
require("dotenv").config()

const { DB_HOST, PORT } = process.env;

mongoose
    .connect(DB_HOST)
    .then(()=>{
    app.listen(PORT , ()=>{
        console.log("Server running on port 3000 (mongoDB connected)......");
    });
})
    .catch(err=>{
    console.log(err);
    process.exit(1);
})