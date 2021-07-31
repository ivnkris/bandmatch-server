const { MusicianUser } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signUp = async (_, { input }) => {
  const {
    email,
    password,
    firstName,
    lastName,
    description,
    isPremium,
    postcode,
    genre,
    experienceLevel,
    instruments,
    imageUrl,
    websiteUrl,
    soundCloudUrl,
    lookingFor,
    openToCollaboration,
    openToJoiningBand,
  } = input;

  const user = await MusicianUser.create({
    email,
    password,
    firstName,
    lastName,
    description,
    isPremium,
    postcode,
    genre,
    experienceLevel,
    instruments,
    imageUrl,
    websiteUrl,
    soundCloudUrl,
    lookingFor,
    openToCollaboration,
    openToJoiningBand,
  });

  const token = tokenise({ id: user.id, email: user.email });

  return { token, user };
};

module.exports = signUp;
