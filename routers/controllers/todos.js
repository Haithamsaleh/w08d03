const todosModel = require('../../db/models/todos')



const newTodos = (req, res) => {
    const {task,isdel, userid} = req.body;

    const newTodos = new todosModel({
        task: task,
        userid,
    });
    newTodos
    .save()
    .then((result) => {
        res.status(201).json(result);

    })
    .catch((err) => {
        res.status(400).json(err);
    })
}
const todos = (req, res) => {
  todosModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const deltodo = (req, res) => {
    todosModel
    .find({})
    .then((result) => {
    console.log(result);
    result.filter(item=>{
      if(item.isdel == true) 
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
    })
  }
  const getTodosById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    todosModel
    .findById(id).exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedTodo = (req, res) => {
  const { id } = req.params;
  
  console.log(id);
  todosModel
  .findByIdAndUpdate(id,{ isDel: true }).exec()
  .then((result) => {
      console.log(result);
      res.status(200).json(result);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};
const updateTodo = (req, res) => {
  const { id } = req.params;
  const {task} = req.body
  
  console.log(id);
  taskModel
  .findByIdAndUpdate(id,{ task }).exec()
  .then((result) => {
      console.log(result);
      res.status(200).json(result);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};
module.exports = {
  newTodos,
  todos,
  deltodo,
  getTodosById,
  deletedTodo,
  updateTodo
};
