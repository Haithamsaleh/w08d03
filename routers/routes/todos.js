const express= require("express")
const{
    newTodos,
  todos,
  deltodo,
  getTodosById,
  deletedTodo,
  updateTodo,
} = require("./../controllers/todos")
const todosRouter = express.Router();
const  authentication  = require("./../middlewares/authentication");
const  authorization  = require("./../middlewares/authorizathion");

todosRouter.post("/todo", newTodos);
todosRouter.get("/todo/:id", getTodosById);

todosRouter.get("/todos", todos);
todosRouter.get("/deltodo", authentication, authorization, deltodo);
todosRouter.delete("/delete/:id", authentication, authorization, deletedTodo);
todosRouter.put("/todo/:id", authentication, authorization, updateTodo);


module.exports = todosRouter;
