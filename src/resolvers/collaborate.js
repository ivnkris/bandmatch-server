const { MusicianUser, Band } = require("../models");

const collaborate = async (_, args) => {
  const bands = await Band.find({ openToCollaboration: true });
  const musicians = await MusicianUser.find({ openToCollaboration: true });

  return { musicians, bands };
};

module.exports = collaborate;
