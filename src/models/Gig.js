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
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue",
    required: false,
  },
  accepting: {
    type: Boolean,
    required: true,
    default: false,
  },
  performers: [
    {
      musician: {
        type: Schema.Types.ObjectId,
        ref: "MusicianUser",
        required: false,
      },
      band: {
        type: Schema.Types.ObjectId,
        ref: "Band",
        required: false,
      },
      confirmed: {
        type: Boolean,
        required: false,
      },
    },
  ],
};

const gigSchema = new Schema(schema);

const Gig = model("Gig", gigSchema);

module.exports = Gig;
