const { Gig } = require("../models");

const deleteGig = async (_, { id }) => {
  const gig = await Gig.deleteOne({ id });

  return gig;
};

module.exports = deleteGig;
