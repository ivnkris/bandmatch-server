const { MusicianUser } = require("../models");

const musicians = async () => {
  const musicians = await MusicianUser.find({})
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return musicians;
};

module.exports = musicians;
