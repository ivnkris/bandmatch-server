const { MusicianUser } = require("../models");

const musicianUser = async (_, { id }) => {
  const musicianUser = await MusicianUser.findById(id).populate("genre.genre");
  console.log(musicianUser);
  return musicianUser;
};

module.exports = musicianUser;
