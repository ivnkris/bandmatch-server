const { Schema, model } = require("mongoose");

const schema = {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    required: true,
    default: false,
  },
  postcode: {
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
    required: false,
  },
  instruments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Instrument",
    },
  ],
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
  soundCloudUrl: {
    type: String,
    required: false,
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
  openToJoiningBand: {
    type: Boolean,
    required: false,
  },
  favourites: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  bandId: {
    type: Schema.Types.ObjectId,
  },
  gigs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gig",
    },
  ],
};

const userSchema = new Schema(schema);

const MusicianUser = model("MusicianUser", userSchema);

module.exports = MusicianUser;
