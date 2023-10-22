const express = require("express");
const ClientController = require("../controller/clientController");

const route = express.Router();

route.get("/clients", ClientController.GetAllClients);
route.post("/create-clients", ClientController.AddClients);
route.delete("/delete-client/:id", ClientController.DeleteOneClient);
route.delete("/delete-client/", ClientController.DeleteAllClient);

module.exports = route;
