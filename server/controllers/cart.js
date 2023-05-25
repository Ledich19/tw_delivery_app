const Cart = require("../models/cartModel");

const cartRouter = require("express").Router();

cartRouter.post("/", async (request, response) => {
  const order = request.body;
  const newOrder = new Cart(order);
  const createdOrder = await newOrder.save();
  response.json(createdOrder);
});

module.exports = cartRouter;
