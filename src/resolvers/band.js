const { Band } = require("../models");

const band = async (_, { id }) => {
  const band = await Band.findById(id)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .populate("gigs");

  // console.log(band);
  return band;
};

module.exports = band;
