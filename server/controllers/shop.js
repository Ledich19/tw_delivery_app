const shopRouter = require("express").Router();

function generateId(existingIds) {
  let id;
  do {
    id = Math.floor(Math.random() * 100000);
  } while (existingIds.includes(id));
  return id;
}

shopRouter.get("/", async (request, response) => {
});
shopRouter.get("/:id", async (request, response) => {

});


module.exports = shopRouter;
