const Product = require("../models/pruducModel");
const Shop = require("../models/shopModel");
const shopRouter = require("express").Router();

shopRouter.get("/", async (request, response) => {
  const page = request.query.page || 1;
  const limit = 9;
  const shops = await Shop.find({})
    .skip((page - 1) * limit)
    .limit(10).populate('products');

  response.json(shops);
});
shopRouter.get("/:id", async (request, response) => {});

shopRouter.post("/", async (request, response) => {

});

module.exports = shopRouter;
