const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
};
const genreSchema = new Schema(schema);

const Genre = model("Genre", genreSchema);

module.exports = Genre;
