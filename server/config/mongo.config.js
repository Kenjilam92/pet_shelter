const mongoose = require ("mongoose"); 
mongoose.connect ('mongodb://localhost/pet_shelter',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then(()=> console.log("database connected"))
    .catch(err=>console.log('failed to connect database', err));