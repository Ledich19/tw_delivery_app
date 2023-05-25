const cartRouter = require("express").Router();

cartRouter.post("/", async (request, response) => {
  const newWinner = { ...request.body };
  addWinner(newWinner);
  response.status(201).json(newWinner);
});

module.exports = cartRouter;
