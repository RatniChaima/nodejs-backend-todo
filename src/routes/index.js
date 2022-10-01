const router = require("express").Router();

const todoRoute = require("./todo.route");
router.use("/todos", todoRoute);

module.exports = router;
