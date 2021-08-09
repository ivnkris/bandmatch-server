const { MusicianUser, Band } = require("../models");

const assemble = async (_, args) => {
  const bands = await Band.find({})
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");
  const musicians = await MusicianUser.find({})
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return { musicians, bands };
};

module.exports = assemble;
