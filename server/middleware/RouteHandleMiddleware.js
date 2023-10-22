const routeNotFound = (req, res,next) => {
  res.status(404).json({
    status: "fail...",
    Message: `${req.originalUrl} does not Exist 🤨`,
  });
};


module.exports = routeNotFound;