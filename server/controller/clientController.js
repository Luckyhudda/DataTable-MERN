const repository = require("../db/repository");

const ClientController = {
  GetAllClients: (req, res) => {
    repository
      .GetClient(req.query)
      .then((result) => {
        res.status(200).json({
          status: "Success",
          Total_Clients: result.length,
          clints: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "failed",
          message: "Something went wrong...💥💥",
        });
      });
  },
  AddClients: (req, res) => {
    repository
      .addManyClients(req.body)
      .then((result) => {
        res.status(201).json({
          status: "Success",
          Total_Clients: result.length,
          clints: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: "failed",
          message: "Something went wrong...💥💥",
        });
      });
  },
  DeleteOneClient: (req, res) => {
    repository
      .deleteClients(req.params.id)
      .then((result) => {
        res.status(201).json({
          status: "Success",
          Total_Clients: result.length,
          clints: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: "failed",
          message: "Something went wrong...💥💥",
        });
      });
  },
  DeleteAllClient: (req, res) => {
    repository
      .deleteAll()
      .then((result) => {
        res.status(201).json({
          status: "Success",
          Total_Clients: result.length,
          clints: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: "failed",
          message: "Something went wrong...💥💥",
        });
      });
  },
};

module.exports = ClientController;
