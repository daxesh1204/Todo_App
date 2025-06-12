const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};


// Create TODO items
// module.exports.saveToDo = (req, res) => {
//   const { toDo } = req.body;
//   ToDoModel.create({ toDo })
//     .then((data) => {
//       console.log("Saved successfully");
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// METHOD-2:
module.exports.saveToDo=async(req,res)=>{
  try {
    const {toDo}=req.body;
    const data=await ToDoModel.create({toDo});
    console.log("Saved successfully");
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({error:"Failed to save todo"})
  }
}

// UPDATE THE TODO list
module.exports.updateTodo=async(req,res)=>{
  try {
    const {id}=req.params;
    const {toDo}=req.body;
    const updatedData=await ToDoModel.findByIdAndUpdate(id,{toDo});
    res.send("Updated Successfully...",updatedData);
  } catch (err) {
    console.log(err);
    res.stutus(500).send({error:"Failed to update todo"});
  }
}

// DELETE THE TODO list
module.exports.deleteTodo=async(req,res)=>{
  try {
    const {id}=req.params;
    const deletedData=await ToDoModel.findByIdAndDelete(id);
    res.send("deleted Successfully...",deletedData);
  } catch (err) {
    console.log(err);
    res.stutus(500).send({error:"Failed to update todo"});
  }
}