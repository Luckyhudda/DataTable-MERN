const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
const ClientRoute = require("./routes/clientRoute");
const routeNotFound = require("./middleware/RouteHandleMiddleware");

app.use("/", ClientRoute);
app.all("*", routeNotFound);

module.exports = app;
