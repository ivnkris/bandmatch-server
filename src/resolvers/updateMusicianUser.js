const { MusicianUser } = require("../models");

const updateMusicianUser = async (_, { input }) => {
  const musicianInfo = input.musicianInfo;
  const updatedUser = await MusicianUser.findByIdAndUpdate(input.musicianId, {
    ...musicianInfo,
  });

  return updatedUser;
};

module.exports = updateMusicianUser;
