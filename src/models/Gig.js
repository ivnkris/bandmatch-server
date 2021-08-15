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
  accepting: {
    type: Boolean,
    required: true,
    default: false,
  },
  performers: [
    {
      musicianId: {
        type: Schema.Types.ObjectId,
        ref: "MusicianUser",
        required: false,
      },
      bandId: {
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
