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
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  isPremium: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: false,
  },
  postcode: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  description: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: false,
  },
};

const venueSchema = new Schema(schema);

venueSchema.pre("save", hashPassword);

venueSchema.methods.validatePassword = validatePassword;

const Venue = model("Venue", venueSchema);

module.exports = Venue;
