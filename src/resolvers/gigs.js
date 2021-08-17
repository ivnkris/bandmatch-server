const { Gig } = require("../models");

const gigs = async (_, { filters }) => {
  console.log(filters);

  const gigs = await Gig.find({ accepting: true })
    .populate("venue")
    .populate("genre");

  console.log(gigs);

  return gigs;
};

module.exports = gigs;
