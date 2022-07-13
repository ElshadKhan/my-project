const Router = require("express");
const router = new Router();
const todoController = require("../controllers/todo.controller.js");

router.post("/todo/add", todoController.createTodo);
router.get("/todo/list", todoController.getTodos);
router.get("/todo/list/type=completed", todoController.getCompletedTodos);
router.get("/todo/list/type=active", todoController.getActiveTodos);
router.put("/todo/edit/:id", todoController.updateTodo);
router.put("/todo/edit/completed/:id", todoController.createCompletedTodo);
router.delete("/todo/delete/:id", todoController.deleteTodo);
router.delete("/todo/delete", todoController.deleteCompletedTodo);

module.exports = router;
