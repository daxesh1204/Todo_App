const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateTodo,
  deleteTodo,
} = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
module.exports = router;
