const { Schema, model } = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/password");

const schema = {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
    required: false,
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
    required: true,
  },
  openToJoiningBand: {
    type: Boolean,
    required: true,
  },
  favourites: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  // bands: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Band",
  //   },
  // ],
};

const userSchema = new Schema(schema);

userSchema.pre("save", hashPassword);

userSchema.methods.validatePassword = validatePassword;

const MusicianUser = model("MusicianUser", userSchema);

module.exports = MusicianUser;
