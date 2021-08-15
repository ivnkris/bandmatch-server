const { Gig } = require("../models");

const gigs = async () => {
  const gigs = await Gig.find({});

  console.log(gigs);

  return gigs;
};

module.exports = gigs;
