const { MusicianUser, Band } = require("../models");

const assemble = async (_, args) => {
  const bands = await Band.find({});
  const musicians = await MusicianUser.find({});

  return { musicians, bands };
};

module.exports = assemble;
