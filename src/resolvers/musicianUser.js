const { MusicianUser } = require("../models");

const musicianUser = async (_, { id }) => {
  const musicianUser = await MusicianUser.findById(id)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return musicianUser;
};

module.exports = musicianUser;
