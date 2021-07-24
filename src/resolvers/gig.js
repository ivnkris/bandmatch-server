const { Gig } = require("../models");

const gig = async (_, { id }) => {
  const gig = await Gig.findById(id);
  return gig;
};

module.exports = gig;
