const { MusicianUser, Genre, Instrument } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signUp = async (_, { input }) => {
  const newUser = await MusicianUser.create(input);

  const user = await MusicianUser.find({ _id: newUser._id })
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  const token = tokenise({ id: user.id, email: user.email });

  return { token, user };
};

module.exports = signUp;
