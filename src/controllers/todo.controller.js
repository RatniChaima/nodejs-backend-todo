const { Todo } = require("../models");

module.exports = {
  getAllTodos: (req, res) => {
    Todo.find(null, function(error, data) {
      if (error)
        return res.status(400).json(error);
      return res.status(200).json(data);
    })
  },
  createTodo: (req, res) => {
    Todo.create(req.body, function(error, data) {
      if (error)
        return res.status(400).json(error);
      return res.status(200).json(data);
    })
  },
  updateTodo: (req, res) => {
    Todo.updateOne({
      _id: req.params.id
    }, req.body, function(error, data) {
      if (error)
        return res.status(400).json(error);
      return res.status(200).json(data);
    })
  },
  deleteTodo: (req, res) => {
    Todo.deleteOne({
      _id: req.params.id
    }, function(error, data) {
      if (error)
        return res.status(400).json(error);
      return res.status(200).json(data);
    })
  },
}