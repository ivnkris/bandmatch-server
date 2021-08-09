const { MusicianUser, Band } = require("../models");

const collaborate = async (_, args) => {
  const bands = await Band.find({ openToCollaboration: true })
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");
  const musicians = await MusicianUser.find({ openToCollaboration: true })
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return { musicians, bands };
};

module.exports = collaborate;
