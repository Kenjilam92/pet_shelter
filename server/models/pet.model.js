//structuring model
const mongoose = require ("mongoose"); 
const PetSchema = new mongoose.Schema({
    "name": {   type: String ,
                required: [true,"Please name the pet!"],
                minlength: [3,"Too short! Please give more info"]
    },
    "type" : {  type: String,
                required: [true,"What kind of animal the pet is?"],
                minlength: [3,"Too short! Please give more info"]
    },
    "desc":  {  type: String,
                required:  [true,"Please describe the pet"],
                minlength: [3,"Too short! Please give more info"]
    },
    "skills": { "skill_1" : { type: String},
                "skill_2" : { type: String},
                "skill_3" : { type: String}
    },
    "likes": {  type: Number,
                default: 0
    }
  },{timestamps: true});//define structure
  
  const Pet = mongoose.model("pet", PetSchema) //define the name of the table in database.
  
  module.exports = Pet