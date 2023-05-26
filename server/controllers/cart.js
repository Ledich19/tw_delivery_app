const Cart = require("../models/cartModel");

const cartRouter = require("express").Router();

cartRouter.get("/", async (request, response) => {
  const orders = await Cart.find({});
  response.json(orders);
});

cartRouter.post("/", async (request, response) => {
  const order = request.body;
  const newOrder = new Cart(order);
  const createdOrder = await newOrder.save();
  response.json(createdOrder);
});

cartRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  await Cart.findByIdAndRemove(id);
  response.status(204).end();
});

module.exports = cartRouter;
