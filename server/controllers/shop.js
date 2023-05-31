const Product = require("../models/pruducModel");
const Shop = require("../models/shopModel");
const shopRouter = require("express").Router();

shopRouter.get("/", async (request, response) => {
  const page = request.query.page || 1;
  const limit = 9;
  const shops = await Shop.find({})
    .skip((page - 1) * limit)
    .limit(10)
    .populate("products");
  response.json(shops);
});

shopRouter.get("/:id", async (request, response) => {
  const shop = await Shop.findById(request.params.id);
  if (shop) {
    response.json(shop);
  } else {
    response.status(404).end();
  }
});

shopRouter.post("/", async (request, response) => {
  const body = request.body;
  if (body.name === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const shop = new Shop({
    name: shop.name,
    products: [],
  });
  const savedShop = await shop.save();
  response.status(201).json(savedShop);
});

shopRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  await Shop.findByIdAndRemove(id);
  response.status(204).end();
});

module.exports = shopRouter;
