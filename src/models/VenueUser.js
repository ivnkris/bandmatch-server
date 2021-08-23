const { Schema, model } = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/password");

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
  isPremium: {
    type: Boolean,
    required: true,
    default: false,
  },
  imageUrl: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  venue: [
    {
      type: Schema.Types.ObjectId,
      ref: "Venue",
    },
  ],
};

const venueUserSchema = new Schema(schema);

venueUserSchema.pre("save", hashPassword);

venueUserSchema.methods.validatePassword = validatePassword;

const VenueUser = model("VenueUser", venueUserSchema);

module.exports = VenueUser;
