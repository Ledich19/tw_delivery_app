const Product = require("../models/pruducModel");
const Shop = require("../models/shopModel");
const shopRouter = require("express").Router();

shopRouter.get("/", async (request, response) => {
  const page = request.query.page || 1;
  const limit = 10;
  const shops = await Product.find({})
    .skip((page - 1) * limit)
    .limit(10);

  response.json(shops);
});

shopRouter.get("/:id", async (request, response) => {
  const shop = await Product.findById(request.params.id);
  if (shop) {
    response.json(shop);
  } else {
    response.status(404).end();
  }
});

shopRouter.post("/", async (request, response) => {
  const body = request.body;
  if (body.shopId === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const shop = await Shop.findById(request.params.id);
  const newProd = new Product({
    ...body,
    shopId: shop._id,
    price: Math.floor(Math.random() * 96) + 5,
  });
  const createdProduct = await newProd.save(newProd);
  await Shop.findByIdAndUpdate(id, {
    products: shop.products.concat(createdProduct._id),
  });
  response.status(201).json(createdProduct);
});

shopRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  await Product.findByIdAndRemove(id);
  response.status(204).end();
});

module.exports = shopRouter;
