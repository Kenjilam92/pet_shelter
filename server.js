const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const mongoose = require ("mongoose"); 

//connect database
require("./server/config/mongo.config")

//CRUD functions(controllers) && Route
app.use ( express.json()); //beginning point
app.use ( express.urlencoded({ extended:true }));//beginning point
app.use ( cors ())
require("./server/routes/pet.routes")(app);


app.listen(port,()=> console.log(`runing backend at port ${port}`))// end point
