const { Gig } = require("../models");

const createGig = async (_, { input }) => {
  console.log("creating gig", input);
  const gig = await Gig.create({ ...input });
  return gig;
};

module.exports = createGig;
