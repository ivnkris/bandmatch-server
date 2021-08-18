const { MusicianUser } = require("../models");

const musicianUser = async (_, { id }) => {
  const musicianUser = await MusicianUser.findById(id)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .populate("gigs")
    .populate("bands")
    .populate("bands.genre");

  console.log(musicianUser.bands);
  return musicianUser;
};

module.exports = musicianUser;
