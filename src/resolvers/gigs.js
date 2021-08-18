const { Gig } = require("../models");

const gigs = async (_, { filters }) => {
  const gigs = await Gig.find({ accepting: true })
    .populate("venue")
    .populate("genre");

  return gigs;
};

module.exports = gigs;
