const Pet = require("../models/pet.model")

const PetCtrl = {
  showAll : (req,res)=>{
    Pet.find()
      .then(data=> res.json(data))
      .catch(err => res.json(err))
  },
  showOne : (req,res)=>{
    Pet.findOne({_id: req.params.id})
      .then(data=>res.json(data))
      .catch(err => res.json(err))
  },
  creat : (req,res) => {
    Pet.create(req.body)
      .then(data=>res.json(data))
      .catch(err => res.json(err))
  },
  edit : (req,res)=>{
    Pet.findOneAndUpdate({_id:req.params.id}, req.body,{runValidators: true})
      .then(data=>res.json(data))
      .catch(err=>res.json(err));
  },
  like: (req,res)=>{
    Pet.findOneAndUpdate({_id:req.params.id}, {$set: {likes : req.body.likes}},{runValidators: true})
      .then(data=>res.json(data))
      .catch(err=>res.json(err));
  },
  delete: (req,res)=>{
    Pet.deleteOne({_id:req.params.id})
      .then(data=>res.json(data))
      .catch(err=>res.json(err));
  },
}

module.exports = PetCtrl