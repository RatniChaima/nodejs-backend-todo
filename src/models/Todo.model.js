const { createModel } = require("../database/db");

const Todo = createModel("Todo", {
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Todo;