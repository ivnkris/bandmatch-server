const { AuthenticationError } = require("apollo-server-express");

const { MusicianUser, Venue } = require("../models");

const { tokenise } = require("../utils/tokenise");

const login = async (_, { input }) => {
  const { email, password } = input;

  const musicianUser = await MusicianUser.findOne({ email });

  if (!musicianUser) {
    const venueUser = await Venue.findOne({ email });

    const isValidPassword = await venueUser.validatePassword(password);

    if (!isValidPassword) {
      throw new AuthenticationError("Incorrect email or password");
    }

    const token = tokenise({ id: venueUser.id, email: venueUser.email });

    return { token, user: venueUser, type: "venue" };

    if (!venueUser) {
      throw new AuthenticationError("User does not exist");
    }
  }

  const isValidPassword = await musicianUser.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError("Incorrect email or password");
  }

  const token = tokenise({ id: musicianUser.id, email: musicianUser.email });

  return { token, user: musicianUser, type: "musician" };
};

module.exports = login;
