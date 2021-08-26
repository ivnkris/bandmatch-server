const { Gig } = require("../models");

const deleteGig = async (_, { input }) => {
  const gig = await Gig.deleteOne({ _id: input.id });

  return input.id;
};

module.exports = deleteGig;
