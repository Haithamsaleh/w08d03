const express= require("express")
const{
    newTodos,
  todos,
  deltodo,
  getTodosById,
  deletedTodo,
  updateTodo,
} = require("./../controllers/todos")
const todoRouter = express.Router();
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

taskRouter.post("/task", newTodos);
taskRouter.get("/task/:id", getTodosById);

taskRouter.get("/tasks", authentication, authorization, todos);
taskRouter.get("/deltask", authentication, authorization, deltodo);
taskRouter.delete("/delete/:id", authentication, authorization, deletedTodo);
taskRouter.put("/task/:id", authentication, authorization, updateTodo);
module.exports = todoRouter;
