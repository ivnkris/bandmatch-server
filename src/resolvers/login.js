const { AuthenticationError } = require("apollo-server-express");

const { MusicianUser, Venue, Band } = require("../models");

const { tokenise } = require("../utils/tokenise");

const login = async (_, { input }) => {
  const { email, password } = input;

  let musicianUser = await MusicianUser.findOne({ email });

  if (!musicianUser) {
    const venueUser = await Venue.findOne({ email });

    if (!venueUser) {
      throw new AuthenticationError("User does not exist");
    }

    const isValidPassword = await venueUser.validatePassword(password);

    if (!isValidPassword) {
      throw new AuthenticationError("Incorrect email or password");
    }

    const token = tokenise({ id: venueUser.id, email: venueUser.email });

    return { token, user: venueUser, type: "venue" };
  }

  const isValidPassword = await musicianUser.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError("Incorrect email or password");
  }

  const token = tokenise({ id: musicianUser.id, email: musicianUser.email });

  // get band the user belongs to
  if (musicianUser) {
    const usersBands = await Band.find({
      musicians: { $in: musicianUser.id },
    });

    const bandIds = usersBands.map((band) => {
      return band.id;
    });

    musicianUser = { ...musicianUser._doc, bands: bandIds };
    musicianUser.id = musicianUser._id;
  }

  console.log("returning", musicianUser);

  return { token, user: musicianUser, type: "musician" };
};

module.exports = login;
