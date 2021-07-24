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
  genre: {
    type: String,
    enum: ["rock", "pop", "folk", "jazz", "country"],
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
  dateTime: {
    type: Date,
    required: true,
  },
  venueId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      required: false,
    },
  ],
};

const gigSchema = new Schema(schema);

const Gig = model("Gig", gigSchema);

module.exports = Gig;
