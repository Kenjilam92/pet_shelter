const PetCtrl = require("../controllers/pet.controller")

module.exports = app =>{
  app.get ("/api/pets", PetCtrl.showAll);
  app.get ("/api/pets/:id", PetCtrl.showOne);
  app.post ("/api/pets/new", PetCtrl.creat)
  app.put ("/api/pets/update/:id", PetCtrl.edit);
  app.put ("/api/pets/update/:id/like", PetCtrl.like);
  app.delete ("/api/pets/delete/:id", PetCtrl.delete);
  
}


  