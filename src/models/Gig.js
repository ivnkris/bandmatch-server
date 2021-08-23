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
    type: Schema.Types.ObjectId,
    ref: "Genre",
  },
  fee: {
    type: Number,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  accepting: {
    type: Boolean,
    required: true,
    default: true,
  },
  performers: [
    {
      musician: {
        type: String,
      },

      band: {
        type: String,
      },

      confirmed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue",
    required: true,
  },
};

const gigSchema = new Schema(schema);

const Gig = model("Gig", gigSchema);

module.exports = Gig;
