const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],
  experienceLevel: {
    type: String,
    enum: ["newbie", "amateur", "expert"],
    required: true,
  },
  numberOfMembers: {
    type: Number,
    required: true,
  },
  instruments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Instrument",
    },
  ],
  soundCloudUrl: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  websiteUrl: {
    type: String,
    required: false,
  },
  openToMembers: {
    type: Boolean,
    required: true,
  },
  lookingFor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Instrument",
    },
  ],
  openToCollaboration: {
    type: Boolean,
    required: false,
  },
  gigs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gig",
    },
  ],
};

const userSchema = new Schema(schema);

const Band = model("Band", userSchema);

module.exports = Band;
