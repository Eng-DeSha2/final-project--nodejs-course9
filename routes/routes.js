const routes = require("express").Router();
const taskcontrol= require("../controls/taskcontrol")

routes.get("/" , taskcontrol.getAllTasks)
routes.post("/create", taskcontrol.createTask);



module.exports = routes;