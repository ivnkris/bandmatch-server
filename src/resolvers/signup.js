const { MusicianUser, Genre, Instrument } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signUp = async (_, { input }) => {
  const user = await MusicianUser.create(input);

  const token = tokenise({ id: user.id, email: user.email });

  return { token, user };
};

module.exports = signUp;
