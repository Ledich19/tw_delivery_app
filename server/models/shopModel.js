const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: {
    display_name: String,
    osm_id: Number,
    lat: String,
    lon: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

shopSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Shop", shopSchema);
