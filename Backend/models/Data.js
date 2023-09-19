const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    name: { type: String}, // String is shorthand for {type: String}
    last: {type:String},
    buy: {type:String},
    sell: { type: String},
    volume: { type: String},
    base_unit : { type:String},
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;