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

todoRouter.post("/todo", newTodos);
todoRouter.get("/todo/:id", getTodosById);

todoRouter.get("/todos", authentication, authorization, todos);
todoRouter.get("/deltodo", authentication, authorization, deltodo);
todoRouter.delete("/delete/:id", authentication, authorization, deletedTodo);
todoRouter.put("/todo/:id", authentication, authorization, updateTodo);
module.exports = todoRouter;
