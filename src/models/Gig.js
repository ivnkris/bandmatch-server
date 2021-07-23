const { Schema, model } = require("mongoose");

const schema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
};

const gigSchema = new Schema(schema);

const Gig = model("Gig", gigSchema);

module.exports = Gig;
