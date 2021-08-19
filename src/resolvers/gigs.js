const { Gig } = require("../models");

const gigs = async (_, { filters }) => {
  const gigs = await Gig.find({ accepting: true })
    .populate("genre")
    .populate("performers")
    .populate("venue");

  return gigs;
};

module.exports = gigs;
