const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Movie", movieSchema, "Movie");
