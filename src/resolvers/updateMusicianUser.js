const { MusicianUser } = require("../models");

const updateMusicianUser = (_, { input }) => {
  console.log(input);
  const updatedUser = MusicianUser.findByIdAndUpdate(
    input.musicianId,
    input.musicianInfo
  );
  return updatedUser;
};

module.exports = updateMusicianUser;
