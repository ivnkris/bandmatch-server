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
  genre: {
    type: String,
    enum: ["rock", "pop", "folk", "jazz", "country"],
    required: false,
  },
  experienceLevel: {
    type: String,
    enum: ["newbie", "amateur", "expert"],
    required: false,
  },
  instrument: [
    {
      type: String,
      enum: [
        "guitar",
        "piano",
        "keyboard",
        "singer",
        "bass",
        "drums",
        "saxophone",
      ],
      required: false,
    },
  ],
  image: {
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
      type: String,
      enum: [
        "guitarist",
        "pianist",
        "keyboardist",
        "singer",
        "bassist",
        "drummer",
        "saxophonist",
        "band",
      ],
      required: false,
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
      ref: "User",
    },
  ],
  bandId: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
