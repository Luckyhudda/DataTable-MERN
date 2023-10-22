const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
  },
  age: Number,
  city: String,
  profession: String,
  joining_date: Date,
});

const client = mongoose.model("Client", clientSchema);

module.exports = client;
